import SideBar from '@/components/SideBar'
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Image, Video } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const AddProductPage = () => {
    return (
        <div className='w-full h-auto flex'>
            <SideBar />
            <div className='flex w-full h-auto'>
                <div className='min-w-xs h-auto'></div>
                <div className='w-full h-auto p-3 flex flex-col gap-3'>
                    <header className='w-full h-auto flex justify-start items-center'>
                        <div className='flex flex-col gap-1 p-2'>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="/dashboard">Dashboard</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="/dashboard/products">Products</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Add Products</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>

                        </div>
                        <div className='flex h-auto w-auto p-2 gap-2 relative'>
                            {/* <Button className='bg-primary text-xs text-primary-foreground'><Plus size={14} /> Add Product</Button> */}
                            {/* <Input type='search' id="search" name='search' placeholder="Search" className='min-w-[230px] pl-8' />
                            <Search className='absolute w-4 h-4 top-4.5 left-4 text-lg text-primary/50' />
                            <Button className='bg-primary text-primary-foreground'><CloudDownload /> Export</Button> */}
                        </div>
                    </header>

                    <section className='flex flex-col gap-3 py-2 w-full h-auto'>
                        <h2 className='font-semibold text-2xl font-mono'>
                            New Product
                        </h2>
                        <Card>
                            <CardHeader className='border-b '>
                                <CardTitle>Product Information</CardTitle>
                            </CardHeader>
                            <CardContent className='space-y-2'>
                                {/* Product Images */}
                                <div className='product-photos w-auto h-auto items-center flex gap-3'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-sm font-medium'>Product Photos <sup className='text-red-500'>*</sup></h3>
                                        <p className='text-xs w-sm text-primary/80'>The image format must be .png or .jpg . The image size is 0 icons 250 x 250. Drag and upload an image of at icons 3 images in order to attract user. </p>
                                    </div>
                                    <div className='w-auto h-auto p-3 flex justify-center items-center'>
                                        <Card className='w-[110px] h-[120px] flex justify-center items-center '>
                                            <CardContent className='flex justify-center items-center gap-1 flex-col p-0'>
                                                <Image size={24} />
                                                <h4 className='text-xs text-primary font-semibold'>Add Photos</h4>
                                                <p className='text-xs text-primary/50'>0/9</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* Product Video */}
                                <div className='product-photos w-auto h-auto items-center flex gap-3'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-sm font-medium flex gap-1 items-end'>Product Video <p className='text-primary/50 text-[10px]'>(optional)</p></h3>
                                        <ul className='text-xs text-primary/80 w-sm pl-3 '>
                                            <li className='list-disc py-[1px]'>
                                                Max resolution 1200 x 1200 and size 3000mb.
                                            </li>
                                            <li className='list-disc py-[1px]'>
                                                Duration 10-60 seconds
                                            </li>
                                            <li className='list-disc py-[1px]'>
                                                Format MP4
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='w-auto h-auto p-3 flex justify-center items-center'>
                                        <Card className='w-[110px] h-[120px] flex justify-center items-center '>
                                            <CardContent className='flex justify-center items-center gap-1 flex-col p-0'>
                                                <Video size={24} />
                                                <h4 className='text-xs text-primary font-semibold'>Add Video</h4>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* Product Name */}
                                <div className='product-photos w-auto h-auto items-center flex gap-3'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-sm font-medium flex gap-1 items-center'>Product Name <sup className='text-red-500'>*</sup></h3>
                                        <p className='text-xs text-primary/80 w-sm '>
                                            Add a max of 40 words to make the product more informing. Example of adding colour, brand etc.
                                        </p>
                                    </div>
                                    <div className='w-full h-auto p-3 flex flex-col justify-center items-center'>
                                        <Input type='text' name='product-name' id='product-name' className='text-xs h-10' placeholder='E.g   Samsung Smartwatch + colour' />
                                        <div className='flex w-full justify-end items-start'>
                                            <p className='text-xs text-primary/80'>0/40</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Category */}
                                <div className='product-photos w-auto h-auto items-center flex gap-3'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-sm font-medium flex gap-1 items-center'>Product Category <sup className='text-red-500'>*</sup></h3>
                                        <p className='text-xs text-primary/80 w-sm '>
                                           Choose your product category so that it can be included in your store category list.
                                        </p>
                                    </div>
                                    <div className='w-full h-auto p-3 flex justify-center items-center'>
                                        <Select>
                                            <SelectTrigger className="w-full text-xs">
                                                <SelectValue placeholder="Choose Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="clothes">Clothes</SelectItem>
                                                <SelectItem value="kitchen-things">Kitchen Accessories</SelectItem>
                                                <SelectItem value="electronics">Electronics</SelectItem>
                                                <SelectItem value="home-decor">Home Decor</SelectItem>
                                                <SelectItem value="house-hold-things">House Hold Things</SelectItem>
                                                <SelectItem value="jwelery">Jwelery</SelectItem>
                                                <SelectItem value="bags">Bags</SelectItem>
                                                <SelectItem value="perfumes">Perfumes</SelectItem>
                                                <SelectItem value="shoes">Shoes</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>


                            </CardContent>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AddProductPage
