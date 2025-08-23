import { Button } from "@/components/ui/button"

const capabilities = [
  {
    title: "Mineral & Coal Trading",
    description:
      "We provide commodity trading services for mining products such as coal, nickel, and gold with an extensive distribution network both domestically and internationally. Our focus is on delivering a sustainable, competitive supply that meets international quality standards.",
    image: "/coal-mineral-warehouse.png",
  },
  {
    title: "Sourcing & Supply Chain Management",
    description:
      "With strong experience and networks, we assist clients in sourcing mining products directly from trusted producers. We ensure the supply chain process runs efficiently, transparently, and on time until the products reach the customers.",
    image: "/supply-chain-logistics.png",
  },
  {
    title: "Quality Assurance & Inspection",
    description:
      "Quality is our top priority. Every product traded through our company undergoes verification, quality testing, and independent inspection to ensure compliance with the specifications required by our customers.",
    image: "/mineral-lab-qc.jpg",
  },
  {
    title: "Logistics & Export Assistance",
    description:
      "We support clients in logistics, shipping, and export processes, including document handling, licensing, and compliance with international regulations. With end-to-end solutions, we ensure smooth distribution from the mine to the global market.",
    image: "/mineral-logistics-pic.jpg",
  },
  {
    title: "Strategic Partnership & Market Development",
    description:
      "In addition to trading, we also open opportunities for strategic partnerships with various industry partners for market development, investment, and mineral downstream projects.",
    image: "/rare-earth-minerals.png",
  },
]

export function Capabilities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={capability.image || "/rare-earth-mineral.png"}
                  alt={capability.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-justify font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-700 text-justify mb-6 leading-relaxed">{capability.description}</p>
  
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
