import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiMapPin, FiPhone, FiCheck } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

const UniversityContactForm = ({ universityName, logoUrl, onClose }) => {
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
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 p-4 z-30">
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-4xl font-light hover:scale-110 transition-transform duration-200">&times;</button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md sm:max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden max-h-[90vh] sm:max-h-[95vh] overflow-y-auto"
      >
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-6 sm:p-4 text-center space-y-4"
          >
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-xl shadow-md">
              <FiCheck />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Thank You!</h2>
            <p className="text-gray-600 text-sm">We’ve received your inquiry and will reach out shortly.</p>
          </motion.div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-red-800 via-red-600 to-red-700 p-4 sm:p-3 text-center space-y-2">
              {logoUrl && (
                <img src={logoUrl} alt={`${universityName} logo`} className="h-14 sm:h-8 mx-auto rounded-sm" />
              )}
              <div className="inline-block bg-red-50 text-red-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                Official Inquiry Form
              </div>
              <h2 className="text-lg sm:text-base font-bold text-white">{universityName}</h2>
              <p className="text-red-100 text-xs sm:text-[11px]">Interested in our programs? Share your details below.</p>
            </div>

            <div className="p-6 sm:p-4 space-y-5">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-2">
                {/* Reusable Field Component */}
                {[
                  { id: 'name', icon: FiUser, label: 'Name', placeholder: 'Enter your name' },
                  { id: 'email', icon: FiMail, label: 'Email', placeholder: 'Enter your email' },
                  { id: 'phone', icon: FiPhone, label: 'Phone', placeholder: 'Enter your phone number' },
                  { id: 'city', icon: FiMapPin, label: 'City', placeholder: 'Enter your city' }
                ].map(({ id, icon: Icon, label, placeholder }) => (
                  <div key={id}>
                    <label className="text-sm text-gray-700 font-medium  sm:block">{label}</label>
                    <div className="relative">
                      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
                      <input
                        {...register(id, {
                          required: `${label} is required`,
                          ...(id === "email" && {
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          }),
                          ...(id === "phone" && {
                            pattern: {
                              value: /^\+?[0-9]{10,14}$/,
                              message: "Invalid phone number"
                            }
                          }),
                        })}
                        className={`w-full pl-10 pr-3 py-2 border rounded-full text-sm focus:outline-none transition-all ${
                          errors[id] ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-red-300'
                        }`}
                        placeholder={placeholder}
                      />
                    </div>
                    {errors[id] && <p className="text-xs text-red-500 mt-1">{errors[id].message}</p>}
                  </div>
                ))}

                {/* Consent */}
                <div>
                  <label className="flex items-start space-x-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      {...register("consent", { required: "Consent is required" })}
                      className="mt-1 text-red-600 focus:ring-red-500 rounded"
                    />
                    <span>
                      I authorize <strong>{universityName}</strong> to contact me via Email, SMS, WhatsApp, and Voice call.
                    </span>
                  </label>
                  {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-600 text-white font-semibold shadow-md hover:shadow-lg transition-all"
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
