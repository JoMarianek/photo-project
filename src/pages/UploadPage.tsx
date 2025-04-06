import { useFormStatus } from "react-dom"

const UploadPage = () => {
  const { pending } = useFormStatus();
  return (
    <div className="flex justify-center p-4">
      <form className="flex flex-col border rounded gap-10 p-4" method="post">
        <input type="file" accept="image/*" name="upload"/>
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default UploadPage