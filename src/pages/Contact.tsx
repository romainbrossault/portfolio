import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'romainbrossault.pro@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          subject: formData.subject,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      setFormData({ firstName: '', lastName: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-12 text-center">
          Contact
        </h1>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-blue-900/50 p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label 
                htmlFor="firstName" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label 
                htmlFor="lastName" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label 
              htmlFor="subject" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Objet
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-6">
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={6}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-400"
          >
            {status === 'sending' ? (
              'Envoi en cours...'
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Envoyer
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-green-500 text-center">
              Message envoyé avec succès !
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-red-500 text-center">
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}