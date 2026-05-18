'use client';

import { useState, useEffect } from 'react';
import { Wallet, Zap, Shield, Globe, ArrowRight } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              QuantumWeb3
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition">Features</a>
            <a href="#technology" className="text-gray-400 hover:text-white transition">Technology</a>
            <a href="#roadmap" className="text-gray-400 hover:text-white transition">Roadmap</a>
          </nav>

          <button
            onClick={connectWallet}
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:opacity-90 transition"
          >
            <Wallet className="w-4 h-4" />
            {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum Web3
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Harnessing quantum computing power to revolutionize blockchain technology. 
            Faster, more secure, and infinitely scalable.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-purple-500 transition">
            <Shield className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Quantum Security</h3>
            <p className="text-gray-400">Post-quantum cryptography protecting your assets</p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-cyan-500 transition">
            <Zap className="w-12 h-12 text-cyan-500 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Quantum-accelerated transaction processing</p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-pink-500 transition">
            <Globe className="w-12 h-12 text-pink-500 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Global Network</h3>
            <p className="text-gray-400">Decentralized quantum nodes worldwide</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Features
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-purple-900/20 to-gray-900 border border-purple-500/30 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Quantum Entanglement Protocol</h3>
            <p className="text-gray-400 mb-4">
              Leverage quantum entanglement for instant, secure cross-chain communication without traditional bridges.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Zero-latency transactions</li>
              <li>• Unhackable quantum keys</li>
              <li>• Multi-chain synchronization</li>
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-cyan-900/20 to-gray-900 border border-cyan-500/30 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Superposition Smart Contracts</h3>
            <p className="text-gray-400 mb-4">
              Execute multiple contract states simultaneously, resolving to optimal outcome upon observation.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Parallel execution paths</li>
              <li>• Automatic optimization</li>
              <li>• Gas-efficient resolution</li>
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-pink-900/20 to-gray-900 border border-pink-500/30 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Quantum Random Oracle</h3>
            <p className="text-gray-400 mb-4">
              True randomness from quantum measurements for provably fair gaming and NFT generation.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Hardware-based entropy</li>
              <li>• Verifiable randomness</li>
              <li>• Tamper-proof results</li>
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-indigo-900/20 to-gray-900 border border-indigo-500/30 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Post-Quantum Signatures</h3>
            <p className="text-gray-400 mb-4">
              Future-proof your assets with lattice-based cryptography resistant to quantum attacks.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• NIST-approved algorithms</li>
              <li>• Backward compatible</li>
              <li>• Migration tools included</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="container mx-auto px-6 py-20 bg-gray-900/50">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Powered by Quantum Tech
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold">1</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Quantum Key Distribution (QKD)</h3>
              <p className="text-gray-400">
                Secure communication channels using quantum mechanics principles. Any eavesdropping attempt 
                collapses the quantum state, alerting both parties instantly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold">2</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Quantum Annealing Consensus</h3>
              <p className="text-gray-400">
                Replace energy-intensive Proof of Work with quantum annealing optimization. 
                Find consensus states in milliseconds instead of minutes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold">3</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Topological Qubits Storage</h3>
              <p className="text-gray-400">
                Store blockchain state in topological qubits for error-resistant, long-term data persistence. 
                Self-correcting quantum memory ensures data integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                QuantumWeb3
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="text-2xl">𝕏</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="text-2xl">⚙️</span>
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              © 2026 QuantumWeb3. Built with quantum love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
