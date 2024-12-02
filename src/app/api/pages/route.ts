import { connect } from '../../../lib/dbConnect';
import mongoose from 'mongoose';
export async function GET() {
  try {
    await connect();
    const collection = mongoose.connection.collection('pages');
    const data = await collection.find({}).toArray();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error: any) {
    console.error("error:", error);
    return new Response(JSON.stringify({
      error: error.response ? error.response.data : error.message
    }), {
      status: error.response ? error.response.status : 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
