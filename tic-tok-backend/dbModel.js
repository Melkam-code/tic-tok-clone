import mongoose from 'mongoose';

const tictokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: Number,
    messages: Number,
    description: String,
    shares: Number,
})

//collection inside the database
export default mongoose.model('tictokVideos', tictokSchema);