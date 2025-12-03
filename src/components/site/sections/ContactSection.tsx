"use client";

import React, { useState } from 'react';
import { companyInfo } from '@/data/MockData';
import { Icon } from '@/utils/iconMapper';
import { createLead } from '@/services/api';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await createLead({
        name: formData.nome,
        email: formData.email,
        phone: formData.telefone,
        message: formData.mensagem,
        source: 'SITE_CONTATO'
      });

      if (success) {
        setSubmitStatus('success');
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de falar com um corretor.');
    window.open(`https://wa.me/55${companyInfo.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="min-h-screen py-16 mt-20 bg-gray-100">
      <div className="max-w-6xl px-4 mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Entre em <span className="text-blue-600">Contato</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Estamos aqui para ajudá-lo. Entre em contato conosco!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Informações de Contato */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              {/* Telefone */}
              <div className="flex items-center p-4 space-x-4 rounded-lg bg-blue-50">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                  <Icon name="Phone" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Telefone</h4>
                  <p className="font-medium text-blue-600">{companyInfo.contact.mobile}</p>
                  <p className="text-sm text-gray-500">Seg à Sex, 8h às 18h</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center p-4 space-x-4 rounded-lg bg-green-50">
                <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg">
                  <Icon name="Mail" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="font-medium text-green-600">{companyInfo.contact.email}</p>
                  <p className="text-sm text-gray-500">Resposta em até 24h</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-center p-4 space-x-4 rounded-lg bg-purple-50">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg">
                  <Icon name="MapPin" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Endereço</h4>
                  <p className="text-gray-600">{companyInfo.address.street}, {companyInfo.address.number}</p>
                  <p className="text-gray-600">{companyInfo.address.neighborhood}, {companyInfo.address.city} - {companyInfo.address.state}</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-center p-4 space-x-4 rounded-lg bg-orange-50">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-lg">
                  <Icon name="Clock" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Horário</h4>
                  <p className="text-gray-600">{companyInfo.businessHours.weekdays}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 mt-8 text-white bg-blue-600 rounded-lg">
              <h4 className="mb-2 text-xl font-bold">Precisa de ajuda urgente?</h4>
              <p className="mb-4 text-blue-100">
                Entre em contato via WhatsApp para respostas mais rápidas.
              </p>
              <button 
                onClick={handleWhatsApp}
                className="px-6 py-2 font-semibold text-blue-600 transition-colors bg-white rounded-lg hover:bg-gray-100"
              >
                Chamar no WhatsApp
              </button>
            </div>
          </div>

          {/* Formulário */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Mensagem *
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Conte-nos sobre seu projeto..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-sm text-center text-green-600">
                  ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-sm text-center text-red-600">
                  ✕ Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;