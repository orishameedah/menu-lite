"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import burger from "public/assets/Ellipse 332.svg";
import { Search, Filter, Upload, Plus, MoreHorizontalIcon } from 'lucide-react'
import { menuItems } from '../../data/menu-items'
import more from "public/assets/more.svg";
import MenuSideBar from "@/components/MenuSideBar";
import ShareLinkModal from "@/components/ShareLinkModal"
import { ItemDropdown } from "@/components/ItemDropdown";
import BulkUploadModal from "@/components/BulkUploadModal";
import { FilterModal } from "@/components/FilterModal";

interface FilterState {
  category: string
  status: string
}

const MenuPage = () => {
  const router = useRouter();
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [showBulkModal, setShowBulkModal] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [items, setItems] = useState(menuItems)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    category: '',
    status: ''
  })

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/basic-details");
  };
   // Get unique categories from items
   const categories = useMemo(() => {
    const uniqueCategories = new Set(items.map(item => item.category))
    return Array.from(uniqueCategories)
  }, [items])

  // Apply filters and search
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Apply search filter
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
      
      // Apply category filter
      const matchesCategory = 
        !activeFilters.category || 
        activeFilters.category === 'all' || 
        item.category === activeFilters.category

      // Apply status filter
      const matchesStatus = 
        !activeFilters.status || 
        activeFilters.status === 'all' || 
        (activeFilters.status === 'available' && item.available) ||
        (activeFilters.status === 'unavailable' && !item.available)

      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [items, searchQuery, activeFilters])

  const handleApplyFilters = (filters: FilterState) => {
    setActiveFilters(filters)
  }

  const handleClearFilters = () => {
    setActiveFilters({ category: '', status: '' })
  }

  const handleAvailabilityToggle = (itemId: string) => {
    setItems(items.map(item => 
      item.id === itemId ? { ...item, available: !item.available } : item
    ))
  }

  const shareUrl = "https://bountip.restaurant/Bobsb...";
  
  const handleShareLink = () => {
    setShowShareModal(!showShareModal);
  };

  const handleBulkUpload = () => {
    setShowBulkModal(!showBulkModal)
  }

  return (
    <div className="flex min-h-screen overflow-y-auto">
      {/* SideBar */}
      <MenuSideBar />

      {/* Content */}
      <div className="flex-1 py-8 px-6 overflow-y-auto">
        {/* Header */}
        <div className="bg-burgerlay py-6 w-full flex flex-col md:flex-row justify-between items-center rounded-lg mb-8">
          <div className="flex items-center gap-4 mb-4 lg:mb-0">
            <Image
              src={burger}
              alt="Store Logo"
              className="ml-5 rounded-full"
            />
            <div className="text-white">
              <h1 className="text-2xl font-bold">Bob's Burgers</h1>
              <p className="text-sm">https://Bobsburgers.store/John</p>
            </div>
          </div>
          <div className="flex md:space-x-4 space-x-3 md:mr-5 mr-0">
            <button className="bg-white py-2 px-4 rounded-lg items-center">
              <span className="font-semibold">Share Store Link</span>
            </button>
            <button className="bg-white py-2 px-4 rounded-lg flex space-x-2 items-center">
              <Image src={more} alt="more" />
              <span className="font-semibold">Store Options</span>
            </button>
          </div>
        </div>

        {/* Menu Tab */}
        <div className="w-full">
            <h1 className="text-3xl font-bold mb-6">Menu</h1>   
            <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center">
             <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                 />
             </div>
             <button className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                     onClick={() => setIsFilterOpen(true)}>
                 <Filter className="h-5 w-5 mr-2" />
                 Filter
             </button>
             <button className="inline-flex items-center px-4 py-2 rounded-lg bg-green text-white hover:bg-green-600"
              onClick={handleSubmit}>
                <Plus className="h-5 w-5 mr-2" />
                Add Menu Item
             </button>
             <button className="inline-flex items-center px-4 py-2 rounded-lg border border-green text-green hover:bg-green-50"
             onClick={handleBulkUpload}>
                <Upload className="h-5 w-5 mr-2" />
                Bulk Upload
             </button>
            </div>
            <div className="space-y-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-green">NGN {item.price.toLocaleString()}</span>
                  <span className="text-gray-400">• {item.sold} sold</span>
                </div>
                {!item.available && (
                  <span className="text-gray-500">Unavailable</span>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-7">
              <button className="px-6 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
              onClick={handleShareLink}>
                Share
              </button>
              <ItemDropdown
                        item={item}
                        onAvailabilityToggle={handleAvailabilityToggle} onDeleteItem={function (itemId: string): void {
                            throw new Error("Function not implemented.");
                        } }         
                            //    onDeleteItem={handleDeleteItem}
              />
            </div>
          </div>
        ))}
      </div>
      <ShareLinkModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          shareUrl={shareUrl}
        />
        <BulkUploadModal
          isOpen={showBulkModal}
          onClose={() => setShowBulkModal(false)}
        />
        <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={handleApplyFilters}
        onClear={handleClearFilters}
        categories={categories}
      />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
