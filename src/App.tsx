import { Notebook as Robot, Brain, Eye } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-cyan-400 font-bold text-xl">RoboFolio</div>
            <div className="flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
          <div className="w-1/2 pt-20">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Innovation Through Automation
            </h1>
            <h2 className="text-2xl text-cyan-400 mb-6">AI & Robotics Engineer</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Crafting the future through advanced robotics and artificial intelligence solutions.
              Transforming ideas into intelligent, automated realities.
            </p>
            <a
              href="#projects"
              className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
            >
              View Projects
            </a>
          </div>
          <div className="w-1/2">
            <model-viewer
              src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
              alt="A 3D model of an expressive robot"
              auto-rotate
              camera-controls
              animation-name="Wave"
              style={{ width: '100%', height: '600px' }}
              exposure="1"
              shadow-intensity="1"
              environment-image="https://modelviewer.dev/shared-assets/environments/aircraft_workshop_01_1k.hdr"
            />
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section id="technologies" className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm">
              <Robot className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Robotics</h3>
              <p className="text-gray-400">Advanced robotics systems and control</p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm">
              <Brain className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI/ML</h3>
              <p className="text-gray-400">Deep learning and neural networks</p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm">
              <Eye className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
              <p className="text-gray-400">Image processing and recognition</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App