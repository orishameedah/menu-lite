import { useState } from 'react'
import { MoreHorizontal, AlertTriangle } from 'lucide-react'
import { MenuItem } from '../types/menu'

interface ItemDropdownProps {
  item: MenuItem
  onAvailabilityToggle: (itemId: string) => void
  onDeleteItem: (itemId: string) => void
}

export function ItemDropdown({ item, onAvailabilityToggle, onDeleteItem }: ItemDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleDelete = () => {
    setShowDeleteModal(false)
  }

  return (
    <>
      <div className="relative">
        <button 
          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MoreHorizontal className="h-5 w-5" />
        </button>
        
        {isOpen && (
          <div className="absolute right-0 mt-2 w-60 rounded-lg border border-gray-200 bg-white shadow-lg z-10">
            <div className="p-3 border-b border-gray-200">
              <h3 className="font-medium">{item.name}</h3>
            </div>
            <div className="p-2">
              <button 
                className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => {
                  // Handle edit functionality
                  setIsOpen(false)
                }}
              >
                Edit item
              </button>
              <div 
                className="flex items-center gap-1 justify-between px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  onAvailabilityToggle(item.id)
                  setIsOpen(false)
                }}
              >
                <span>Mark as unavailable</span>
                <div className={`w-10 h-6 rounded-full p-1 transition-colors ${item.available ? 'bg-green' : 'bg-gray-200'}`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${item.available ? 'translate-x-4' : 'translate-x-0'}`} />
                </div>
              </div>
              <button 
                className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => {
                  // Handle discount functionality
                  setIsOpen(false)
                }}
              >
                Add discount
              </button>
              <button 
                className="w-full text-left px-3 py-2 rounded-md text-red-500 hover:bg-gray-50"
                onClick={() => {
                  setShowDeleteModal(true)
                  setIsOpen(false)
                }}
              >
                Delete item
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <div className="flex flex-col items-center text-center">
              {/* <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center mb-4"> */}
                <AlertTriangle className="h-12 w-12 mb-4 text-yellow-400" />
              {/* </div> */}
              <h2 className="text-xl font-semibold mb-2">Delete Menu Item</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this menu item ({item.name})? This action cannot be undone
              </p>
              <div className="flex flex-col w-full gap-2">
                <button
                  onClick={handleDelete}
                  className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

