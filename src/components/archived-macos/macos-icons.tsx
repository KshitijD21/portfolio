"use client";

export function MacOSIcons() {
  const icons = [
    { name: "Finder", icon: "🔍", color: "from-blue-400 to-blue-600" },
    { name: "Safari", icon: "🌐", color: "from-blue-500 to-cyan-500" },
    { name: "Mail", icon: "📧", color: "from-blue-400 to-blue-600" },
    { name: "Messages", icon: "💬", color: "from-green-400 to-green-600" },
    { name: "Photos", icon: "🖼️", color: "from-yellow-400 to-yellow-600" },
    { name: "Music", icon: "🎵", color: "from-red-400 to-pink-500" },
    { name: "App Store", icon: "🛍️", color: "from-blue-500 to-blue-700" },
    { name: "Settings", icon: "⚙️", color: "from-gray-400 to-gray-600" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {icons.map((app, index) => (
        <div
          key={index}
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white text-2xl cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200`}
          title={app.name}
        >
          {app.icon}
        </div>
      ))}
    </div>
  );
}