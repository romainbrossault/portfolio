import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_nfew82o',
        'template_yrtd1jf',
        {
          to_email: 'romainbrossault.pro@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'YDFU4QtAhvT2q9rQf'
      );

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
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
        <div className="text-center mb-12">
          <Mail className="w-16 h-16 mx-auto mb-4 text-red-600 dark:text-red-300" />
          <h1 className="text-4xl font-bold text-red-600 dark:text-red-300">
            Contactez-moi
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            N'hésitez pas à me contacter pour toute question ou proposition
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-red-900/30 p-8 rounded-xl shadow-xl backdrop-blur-sm border border-gray-200 dark:border-red-800/30"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label 
                htmlFor="firstName" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                <User className="w-4 h-4 inline-block mr-2" />
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label 
                htmlFor="lastName" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                <User className="w-4 h-4 inline-block mr-2" />
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm transition-colors"
                required
              />
            </div>
          </div>

          <div className="mb-6 space-y-2">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <Mail className="w-4 h-4 inline-block mr-2" />
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm transition-colors"
              required
              placeholder="votre.email@exemple.com"
            />
          </div>

          <div className="mb-6 space-y-2">
            <label 
              htmlFor="subject" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <MessageSquare className="w-4 h-4 inline-block mr-2" />
              Objet
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm transition-colors"
              required
            />
          </div>

          <div className="mb-6 space-y-2">
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <MessageSquare className="w-4 h-4 inline-block mr-2" />
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={6}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm transition-colors resize-none"
              required
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center px-6 py-3 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors disabled:bg-red-400 disabled:cursor-not-allowed backdrop-blur-sm"
          >
            {status === 'sending' ? (
              'Envoi en cours...'
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Envoyer
              </>
            )}
          </motion.button>

          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-500 dark:text-green-400 text-center font-medium"
            >
              Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-red-500 dark:text-red-400 text-center font-medium"
            >
              Une erreur est survenue. Veuillez réessayer.
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}