/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleContactSubmit = e => {
        e.preventDefault();
        console.log('Contact hoise');
        e.target.reset();
        Swal.fire(
            'Your message has been submitted',
            "We will reach out to you soon",
            'success'
        )
    }

    return (
        <div className="pt-[200px] min-h-screen bg-base-200">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-400">
                <div className="flex flex-col justify-between items-start">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
                    </div>
                    <img src="https://mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                    <p>This design is inspired from: <Link className="btn-link" target='blank' to="https://mambaui.com/">mambaui.com</Link></p>
                </div>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="Your name here" className="w-full p-3 rounded bg-base-200 text-black" required />
                        <div data-lastpass-icon-root="true" ></div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" placeholder="Email address..." className="w-full p-3 rounded bg-base-200 text-black" required/>
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" placeholder="Write here" rows="3" className="w-full p-3 rounded bg-base-200 text-black" required></textarea>
                    </div>
                    <button  type="submit" className="w-full p-3 text-sm font-bold uppercase rounded bg-[#ffd909] text-black">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;