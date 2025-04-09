const Contactus = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact us</h1>
      <form className="p-4 m-4 w-60 justify-center">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          className="p-2 w-full"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="p-2 w-full"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Message"
          className="p-2 w-full h-32"
          defaultValue="hello"
        ></textarea>

        <label htmlFor="sentMessage">Sent Message</label>
        <textarea
          id="sentMessage"
          placeholder="sentMessage"
          className="p-2 w-full h-32"
          defaultValue="hello"
        ></textarea>

        <button
          type="submit"
          className="p-2 w-full text-xl font-bold text-white bg-green-800 rounded-xl"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactus;
