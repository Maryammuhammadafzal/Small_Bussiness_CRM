
import AddProductHeader from './components/AddProductHeader'
import AddProductForm from './components/AddProductForm'
import SideBar from '@/components/SideBar';

// Api Url
const apiUrl = process.env.API_URL;

const AddProductPage = () => {
    return (
        <div className='w-full h-auto flex'>
            <SideBar />
            <div className='flex w-full h-auto'>
                <div className='min-w-xs h-auto'></div>
                <div className='w-full h-auto p-3 flex flex-col gap-3'>
                    <AddProductHeader />

                    <AddProductForm />
                </div>
            </div>
        </div>
    )
}

export default AddProductPage
