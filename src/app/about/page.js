import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Package, Users, BarChart, Clock, Shield, Zap, Heart, Target, Lightbulb } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="flex items-center justify-between">
            <div className="max-w-3xl">
              {/* Icon */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
                  <Package className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
                Making inventory<br />
                <span className="text-green-600">stupid simple.</span>
              </h1>

              {/* Enhanced Description */}
              <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed max-w-2xl">
                We're tired of complicated software that needs a PhD to use. 
                IVMA is built for real business owners who want things to just work.
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-8 mb-12">
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-1">10K+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Happy Businesses</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-1">5M+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Items Tracked</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-1">99.9%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Always Working</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
                  See how we help
                </button>
              </div>

              {/* Additional Info */}
              <div className="flex items-center space-x-6 mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Support when you need it</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Your data is safe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Always up-to-date</span>
                </div>
              </div>
            </div>

            {/* Right Side Visual Element */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Abstract geometric shapes */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-100 rounded-full opacity-60"></div>
                <div className="absolute top-12 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-40"></div>
                <div className="absolute -top-4 right-8 w-16 h-16 bg-green-300 rounded-full opacity-80"></div>
                
                {/* Main content card */}
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm max-w-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-500 font-medium">IVMA DASHBOARD</div>
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <Package className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700 font-medium">Know what you have</span>
                      </div>
                      <span className="text-sm text-gray-500">✓</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700 font-medium">Get alerts when low</span>
                      </div>
                      <span className="text-sm text-gray-500">✓</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700 font-medium">Simple reports</span>
                      </div>
                      <span className="text-sm text-gray-500">✓</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Easy to use</div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom accent element */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center">
                  <div className="text-2xl font-light text-green-600">😊</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto">
              "We built IVMA because we were tired of inventory software that made simple things complicated. 
              Every business owner should be able to know what they have in stock without needing a computer science degree."
            </p>
            <div className="mt-8">
              <div className="text-gray-400 text-sm">
                — The team behind IVMA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why IVMA Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Why we built IVMA
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Because running a business is hard enough without complicated software
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group">
              <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 h-full hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Safe & Reliable</h3>
                <p className="text-gray-700 font-light leading-relaxed text-lg">
                  Your data is protected like it's our own business. Automatic backups mean you'll never lose anything important.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 h-full hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Actually Fast</h3>
                <p className="text-gray-700 font-light leading-relaxed text-lg">
                  See your inventory update in real-time. No waiting, no loading screens - just instant results.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 h-full hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Made with Care</h3>
                <p className="text-gray-700 font-light leading-relaxed text-lg">
                  Every button, every screen, every feature is designed to make your life easier, not harder.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 h-full hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Real People Help</h3>
                <p className="text-gray-700 font-light leading-relaxed text-lg">
                  When you need help, you talk to real humans who actually understand your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              What we believe
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Simple ideas that guide everything we do
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                <Lightbulb className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Keep it Simple</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                If you need a manual to use it, we didn't build it right. Good software should just make sense.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                <Heart className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Care About People</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Behind every business is a person trying to make it work. We never forget that.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                <Target className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Solve Real Problems</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We only build features that actually help businesses run better. No fancy stuff just for show.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default About
