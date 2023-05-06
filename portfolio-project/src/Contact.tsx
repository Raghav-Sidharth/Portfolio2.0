export default function Contact() {
  return (
    <>
      <div className="w-full bg-[#eeede1] pt-20">
        <div></div>
      </div>
      <div
        id="contact"
        className="w-full h-screen bg-[#eeede1] text-[#07212c] font-proxima flex justify-center items-center p-4"
      >
        <form
          action="https://getform.io/f/626e9833-6ca0-478d-95ed-6744813e8ef6"
          method="POST"
          className="flex flex-col max-w-[600px] w-full pb-20"
        >
          <div className="pb-8">
            <p className=" sm:text-3xl md:text-6xl font-extrabold inline border-b-4 border-[#a48948]">
              Contact
            </p>
            <p className="py-10 font-bold md:text-3xl">
              Submit the form below to get in touch!{' '}
            </p>
          </div>
          <input
            className="my-3 p-2 bg-[#07212c] text-[#eeede1] rounded-lg"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-3 p-2 bg-[#07212c] text-[#eeede1] rounded-lg"
            type="text"
            placeholder="Email"
            name="email"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={10}
            className="my-3 p-2 bg-[#07212c] text-[#eeede1] rounded-lg"
          ></textarea>
          <button className="px-4 py-3 my-8 mx-auto flex items-center rounded-lg border-2 border-[#07212c] duration-150 hover:border-[#a48948] hover:bg-[#a48948] hover:text-[#eeede1]">
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}
