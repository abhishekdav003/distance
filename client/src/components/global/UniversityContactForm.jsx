import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiMapPin, FiPhone, FiCheck } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

const UniversityContactForm = ({ universityName, logoUrl , onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <div className="absolute flex justify-center items-center min-h-screen w-full bg-black/60 p-4 z-30">
      <div className="absolute top-4 right-4">
        <button onClick={onClose} className="text-white text-4xl cursor-pointer">
          &times;
        </button> 
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-8 h-full"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FiCheck className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Thank You!</h2>
            <p className="text-center text-gray-600 mt-2">
              We've received your details and will get back to you shortly.
            </p>
          </motion.div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 p-6 flex items-center justify-center flex-col">
              {logoUrl && (
                <img src={logoUrl} alt={`${universityName} logo`} className="h-16 mb-4 rounded-xs" />
              )}
              <h2 className="text-xl font-bold text-white text-center">{universityName}</h2>
              <p className="text-sm text-teal-100 mt-2 text-center">
                Interested in our courses? Share your details and we'll get back to you.
              </p>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      {...register("name", { required: "Name is required" })}
                      className={`w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={`w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Phone</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiPhone className="text-gray-400" />
                    </div>
                    <input
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: {
                          value: /^\+?[0-9]{10,14}$/,
                          message: "Invalid phone number"
                        }
                      })}
                      className={`w-full pl-10 pr-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-1">City</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiMapPin className="text-gray-400" />
                    </div>
                    <input
                      {...register("city", { required: "City is required" })}
                      className={`w-full pl-10 pr-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                      placeholder="Enter your city"
                    />
                  </div>
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("consent", { required: "You must agree to be contacted" })}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      I authorize {universityName} to contact me with updates & notifications via Email, SMS, WhatsApp, and Voice call.
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Submit Inquiry
                </motion.button>
              </form>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default UniversityContactForm;