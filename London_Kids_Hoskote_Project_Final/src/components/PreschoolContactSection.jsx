import React, { useState } from 'react';
import SectionHeading from './common/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

const PreschoolContactSection = () => {
    const [formData, setFormData] = useState({
        parentName: '',
        phoneNumber: '',
        childName: '',
        childAge: '',
        program: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const validate = () => {
        const newErrors = {};

        // Parent Name
        if (!formData.parentName.trim()) {
            newErrors.parentName = "Parent's name is required";
        } else if (formData.parentName.length < 3) {
            newErrors.parentName = "Name must be at least 3 characters";
        }

        // Phone Number (10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (!phoneRegex.test(formData.phoneNumber.replace(/[\s-]/g, ''))) {
            newErrors.phoneNumber = "Please enter a valid 10-digit number";
        }

        // Child Name
        if (!formData.childName.trim()) {
            newErrors.childName = "Child's name is required";
        }

        // Child Age
        if (!formData.childAge.trim()) {
            newErrors.childAge = "Child's age is required";
        }

        // Program
        if (!formData.program) {
            newErrors.program = "Please select a program";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        if (validate()) {
            // Simulate API call
            setTimeout(() => {
                setSubmitStatus('success');
                setIsSubmitting(false);
                setFormData({
                    parentName: '',
                    phoneNumber: '',
                    childName: '',
                    childAge: '',
                    program: '',
                    message: ''
                });
            }, 1500);
        } else {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Content & Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionHeading
                        align="left"
                        subtitle="Join Our Family"
                        title="Begin Your Child's Journey"
                        description="We are thrilled that you are considering London Kids School for your little one. Reach out to us to schedule a visit or learn more about our admissions process."
                    />

                    <div className="mt-10 space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-800">Visit Us</h4>
                                <p className="text-slate-600">First Floor, above carquest, near old government hospital, Petechannappa, Extension, Hoskote, Karnataka 562114</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-800">Call Us</h4>
                                <p className="text-slate-600">+91 9606555118</p>
                                <p className="text-slate-500 text-sm">Mon - Sat: 9:00 AM - 4:00 PM</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-800">Email Us</h4>
                                <p className="text-slate-600">londonkidshoskote@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -z-10 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-tr-full -z-10 opacity-50"></div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Send an Inquiry</h3>

                    <AnimatePresence mode='wait'>
                        {submitStatus === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-green-800 mb-2">Thank You!</h4>
                                <p className="text-green-700">Your inquiry has been sent successfully. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setSubmitStatus(null)}
                                    className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                >
                                    Send Another
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-5"
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-600">Parent's Name <span className="text-rose-500">*</span></label>
                                        <input
                                            type="text"
                                            name="parentName"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.parentName ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:ring-2 outline-none transition-all`}
                                        />
                                        {errors.parentName && <p className="text-xs text-rose-500 font-medium">{errors.parentName}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-600">Phone Number <span className="text-rose-500">*</span></label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            placeholder="9876543210"
                                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.phoneNumber ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:ring-2 outline-none transition-all`}
                                        />
                                        {errors.phoneNumber && <p className="text-xs text-rose-500 font-medium">{errors.phoneNumber}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-600">Child's Name <span className="text-rose-500">*</span></label>
                                        <input
                                            type="text"
                                            name="childName"
                                            value={formData.childName}
                                            onChange={handleChange}
                                            placeholder="Emma"
                                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.childName ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:ring-2 outline-none transition-all`}
                                        />
                                        {errors.childName && <p className="text-xs text-rose-500 font-medium">{errors.childName}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-600">Child's Age/DOB <span className="text-rose-500">*</span></label>
                                        <input
                                            type="text"
                                            name="childAge"
                                            value={formData.childAge}
                                            onChange={handleChange}
                                            placeholder="e.g. 3 years"
                                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.childAge ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:ring-2 outline-none transition-all`}
                                        />
                                        {errors.childAge && <p className="text-xs text-rose-500 font-medium">{errors.childAge}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-600">Program Interested In <span className="text-rose-500">*</span></label>
                                    <select
                                        name="program"
                                        value={formData.program}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.program ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:ring-2 outline-none transition-all text-slate-600`}
                                    >
                                        <option value="">Select a program...</option>
                                        <option value="Toddler">Toddler Program (1.5 - 2.5 yrs)</option>
                                        <option value="Preschool">Preschool (2.5 - 4 yrs)</option>
                                        <option value="PreK-Kindergarten">Pre-K / Kindergarten (4 - 6 yrs)</option>
                                    </select>
                                    {errors.program && <p className="text-xs text-rose-500 font-medium">{errors.program}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-600">Message (Optional)</label>
                                    <textarea
                                        rows="3"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Any specific questions or requests?"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        "Submit Inquiry"
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default PreschoolContactSection;
