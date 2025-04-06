import { useFormStatus } from "react-dom"

const UploadPage = () => {
  const { pending } = useFormStatus();
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <p>Upload your pictures here &#128520;</p>
        <form encType="multipart/form-data" action="https://eef2-88-64-225-234.ngrok-free.app/upload" className="flex border justify-center rounded gap-10 p-4" method="post">
          <input className="border rounded flex" type="file" accept="image/*" name="upload"/>
          <button className="bg-blush text-white border rounded p-2" type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default UploadPage