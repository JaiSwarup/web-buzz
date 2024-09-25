const Footer = () => {
  return (
    <div className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <div>
            <p>&copy; 2021 XYZ Organization. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer