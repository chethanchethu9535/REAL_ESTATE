import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,   
    },
    avatar:{
        type:String,
        default:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEAQUH/8QAKhABAQEAAgAEBgEEAwAAAAAAAAECAxEEITFBEiIyUWFxE0JTkaEUM7H/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuIAAAAAAAAAA53Pudz7g6AAAAAAAAAAAAAAAAjrcn5Q1u3ynkgCV3aj3b6gAABLZ6VOcln5QAXZ1NeiTP+lmN+1BYAAAAAAAAAAq3ru9eyXJep0qAAABzWs5ner1AdFF8Vj2ls/wAOzxOL69z8guHJZqd5vcdAABZx69qsZ12NfFASAAAAAABHd6zQVaverXAAABHk3MYur6MO9Xeu6u8Xrzzn2682cABUT4uS8epZ6e8bs6ms/FPSvOa/Ca749T7VFXgAJcd60iS9XsGgcz5zt0AAAABDk+lNDl+kFQAAAMni/wDsz+lDV4vPlN/adMqgAINPg/TbM2eFz1x9/cVcAgAAuxfliSPH9MSAAAAAR3PlqTlncsBQFnVAAAcslnVncrHy8Osecnefu2WyT5rJ+6h/Nxz+uAwjZdeHvr8JnfBnzlzKCrh4Lqy7lmf/AFrV/wA3Ff689p5s15y9z7wHQAAdzO9QF2fpjoAAAAAAAq5J59/dBfZ3OlNz8N6BxRz8/wAF+HF+b3/Czl3/AB8d17+zADtt1e9W2/lwFQAASzrWb3m2fpEBt4eack6vlqesWvOzbnUs9Y9DOvizLPSxFdWcWep3UMTu/hfPKAAAAAAAAAI6z8USAYPG95zmX3rI9jk488mbnU7lYObwe8eePmn+wZgvlehUAAAdmbq9Zlt/AON3g5dcU/FQ4fBW+fL5T7Nuc5zJMzqRFdzOo6AAAAAAAAAAAAAIb4scn15lUa8FxX6fiz+q1AMV8DP7n+j/AIM/uX/DaAzY8HxZvn3r91fjGcTrOZP0kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;