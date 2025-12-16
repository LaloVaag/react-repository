import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

export default function Form() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const form = useRef();
    
    const onSubmit = (data) => {
        if(Object.keys(data).length !== 0){
            emailjs.send("service_kgu0091", "template_12vbjdt", data, "k_T0vA-Qku3JILK4C")
            .then( () => {
                toast.success('Message Sent Successfully!');
                form.current.reset();
            })
            .catch( (error) => {
                toast.error(`Failed to send message: ${error.text}`);
            });
        }else{
            toast.error("You can't send empty data");
        }
    };
    
    return(
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className='input-area'>
                <label htmlFor="name">Name<span style={{color: '#ffffff'}}>*</span></label>
                <br />
                <input {...register("name", {required: true})} id='name' name='name' type="text" />
                {errors.name && <span className='error-msg'>This is required</span>}
            </div>
            <div className='input-area'>
                <label htmlFor="email">Email<span style={{color: '#ffffff'}}>*</span></label>
                <br />
                <input {...register("email", {required: true, pattern: /^\S+@\S+$/i})} id='email' name='email' type="email" />
                {errors.email && <span className='error-msg'>This is required</span>}
            </div>
            <div className='input-area'>
                <label htmlFor="phone">Phone</label>
                <br />
                <input {...register("phone", {required: false, minLength: 10, maxLength:10})} id='phone' name='phone' type="tel" />
                {errors.phone && <span className='error-msg'>It has to be 10 digits</span>}
            </div>
            <div className='input-area'>
                <label htmlFor="email">Message<span style={{color: '#ffffff'}}>*</span></label>
                <br />
                <textarea {...register("message", {required: true})} name="message" id="message"></textarea>
                {errors.message && <span className='error-msg'>This is required</span>}
            </div>
            <input id='send-msg' type="submit" value="Send Message" />
        </form>
    )
}