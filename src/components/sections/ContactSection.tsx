"use client";

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { Icon } from '@/utils/iconMapper';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! (Demo)');
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
                  <p className="font-medium text-blue-600">{siteConfig.contact.phone}</p>
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
                  <p className="font-medium text-green-600">{siteConfig.contact.email}</p>
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
                  <p className="text-gray-600">{siteConfig.contact.address.fullAddress}</p>
                  <p className="text-gray-600">{siteConfig.contact.address.city}</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-center p-4 space-x-4 rounded-lg bg-orange-50">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-lg">
                  <Icon name="Clock" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Horário</h4>
                  <p className="text-gray-600">{siteConfig.contact.businessHours.weekdays}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 mt-8 text-white bg-blue-600 rounded-lg">
              <h4 className="mb-2 text-xl font-bold">Precisa de ajuda urgente?</h4>
              <p className="mb-4 text-blue-100">
                Entre em contato via WhatsApp para respostas mais rápidas.
              </p>
              <button className="px-6 py-2 font-semibold text-blue-600 transition-colors bg-white rounded-lg hover:bg-gray-100">
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
                className="w-full px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;