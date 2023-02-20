import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt} from "../utils"
import { Form ,Loader} from "../components";

const CreatePost = () => {
   const navigate = useNavigate();
   const [from, setForm ] = useState({
	name: '',
	prompt:'',
	photo:'',
   });

   const [generatingImg ,setGeneratingImg] = useState(false);
   const [ loading,setLoading] = useState(false);

const handleSubmit =  () =>{


}
const handleChange =  (e) =>{


}
const handleSurpriseMe=()=>{
const randomPrompt = getRandomPrompt(from.prompt);
setForm({...from,prompt:randomPrompt})
}

const generateImage=()=>{

}
  return (
	<section className="max-w-7xl mx-auto">
<div className="">
	
			<h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
			<p className='mt-2 text-[#666e75] text-[14px] max-w-[500px]'>Create imaginative and visully stunning images generated 
			through DALL-E AI and share them with the
			community</p>
</div>
<form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
<div className='flex flex-col gap-5'>
<Form
labelName="Your Name"
type="text"
name="name"
placeholder="Sahil Dhargave"
value={from.name}
handleChange={handleChange}

/>
<Form
labelName="Prompt"
type="text"
name="prompt"
placeholder="A plush toy robot sitting against a yellow wall"
value={from.prompt}
handleChange={handleChange}
isSurpriseMe
handleSurpriseMe={handleSurpriseMe}

/>
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
{from.photo ? (
   <img
   src={from.photo}
   alt={from.prompt}
   className='w-full h-full object-contain'
   />

):(

	<img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
)}
{generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
</div>
</div>
 <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>
		 <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>
</form>
	</section>
  )
}

export default CreatePost