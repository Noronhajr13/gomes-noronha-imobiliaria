'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/utils/helpers';
import { companyInfo } from '@/data/MockData';
import { getButtonClass } from '@/styles/theme';
import Logo from '@/components/site/ui/Logo';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loginSuccess, setLoginSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simular chamada de API
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
      
      // Simular redirecionamento após sucesso
      setTimeout(() => {
        console.log('Redirecionando para o CRM...');
        // window.location.href = '/crm/dashboard';
      }, 1500);
    }, 2000);
  };

  const features = [
    'Gestão completa de imóveis',
    'CRM de leads e clientes', 
    'Relatórios detalhados',
    'Segurança de dados'
  ];

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Header com Logo */}
          <div className="text-center">
            <Link href="/" className="inline-block mb-8">
              <Logo 
                variant="full" 
                theme="light" 
                size="lg" 
                showText={true}
                className="mx-auto"
              />
            </Link>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-black">
                Acesso ao CRM
              </h1>
              <p className="text-gray-600">
                Entre com suas credenciais para acessar o sistema
              </p>
            </div>
          </div>

          {/* Success Message */}
          {loginSuccess && (
            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-700">Login realizado com sucesso! Redirecionando...</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 border rounded-lg",
                    "bg-white text-black placeholder-gray-500",
                    "focus:outline-none focus:ring-2 focus:ring-black focus:border-black",
                    "transition-all duration-200",
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  )}
                  placeholder="seu@email.com"
                  disabled={isLoading}
                />
                {errors.email && (
                  <div className="flex items-center gap-1 mt-2 text-xs text-red-500">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: '' });
                  }}
                  className={cn(
                    "w-full pl-10 pr-12 py-3 border rounded-lg",
                    "bg-white text-black placeholder-gray-500",
                    "focus:outline-none focus:ring-2 focus:ring-black focus:border-black",
                    "transition-all duration-200",
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  )}
                  placeholder="••••••••"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-gray-700 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {errors.password && (
                  <div className="flex items-center gap-1 mt-2 text-xs text-red-500">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.password}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-black bg-white border-gray-300 rounded focus:ring-black focus:ring-2"
                  disabled={isLoading}
                />
                <span className="text-sm text-gray-600">Lembrar-me</span>
              </label>
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-black transition-colors"
                disabled={isLoading}
              >
                Esqueceu a senha?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                getButtonClass('primary', 'lg'),
                "w-full flex items-center justify-center gap-2",
                isLoading && "opacity-50 cursor-not-allowed"
              )}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Entrando...</span>
                </>
              ) : (
                <>
                  <span>Entrar no Sistema</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                Não tem acesso?
              </span>
            </div>
          </div>

          {/* Contact Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Solicite seu acesso através do{' '}
              <a
                href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Olá! Gostaria de solicitar acesso ao CRM da ${companyInfo.name}.`}
                className="font-medium text-black hover:text-gray-700 transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Info Panel */}
      <div className="hidden lg:flex lg:flex-1 items-center justify-center p-12 bg-gray-50">
        <div className="max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Sistema CRM Imobiliário
            </div>
            <h2 className="mb-4 text-3xl font-bold text-black">
              {companyInfo.name}
            </h2>
            <p className="text-lg text-gray-600">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black mb-4">Recursos do Sistema:</h3>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Company Info */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <div className="text-center space-y-2">
              <p className="font-semibold text-black">{companyInfo.fullName}</p>
              <p className="text-sm text-gray-600">{companyInfo.creci}</p>
              <p className="text-sm text-gray-500">
                {companyInfo.address.street}, {companyInfo.address.number}
              </p>
              <p className="text-sm text-gray-500">
                {companyInfo.address.neighborhood}, {companyInfo.address.city}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;