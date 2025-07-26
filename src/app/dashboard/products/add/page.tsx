'use client'
import SideBar from '@/components/SideBar'
import React, { useEffect, useRef, useState } from 'react'
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
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Image, Video } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import axios from 'axios'

// Api Url
const apiUrl = process.env.API_URL;

const AddProductPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<{
        product_images: File[];
        product_video: File[];
        product_name: string;
        product_category: string;
        product_description: string;
        status: number;
        product_brand: string;
        product_ingredient: string;
        product_sku: string;
        product_stock: number;
    }>({
        product_images: [],
        product_video: [],
        product_name: '',
        product_category: '',
        product_description: '',
        status: 0,
        product_brand: '',
        product_ingredient: '',
        product_sku: '',
        product_stock: 0,
    });


    useEffect(() => {
        console.log(formData)
    })

    const handleFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        console.log(formData);
    };

    // Handle Submit Button
    const handleSubmit = async (e: any) => {
        e.preventDefault();


        try {
            const response = await axios.post('http://localhost:3000/api/products/add', formData 
            //     {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // }
        );

            console.log(response.data.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }

    }


    // Handle Back button
    const handleBack = (e: any) => {
        e.preventDefault();
        router.push('/dashboard/products');
    }

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

                    <form onSubmit={handleSubmit} className='flex flex-col gap-3 py-2 w-full h-auto'>
                        <h2 className='font-semibold text-2xl font-mono'>
                            New Product
                        </h2>
                        {/* Product Information */}
                        <Card className='bg-transparent'>
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
                                                <p className='text-xs text-primary/50'>{formData.product_images.length}/9</p>
                                                <Input name='product_images' id='product_images' type="file" multiple className='' accept='image/*' onChange={(e) => {
                                                    const files = e.target.files
                                                    if (files && files.length > 0) {
                                                        setFormData({ ...formData, product_images: Array.from(files) })
                                                    }
                                                }} />
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
                                                <Input name='product_video' id='product_video' type="file" className='' accept='video/*' onChange={(e) => {
                                                    const file = e.target.files
                                                    if (file && file.length > 0) {
                                                        setFormData({ ...formData, product_video: Array.from(file) })
                                                    }
                                                }} />
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
                                    <div className='w-full h-auto p-3 flex gap-[2px] flex-col justify-center items-center'>
                                        <Input onChange={(e) => setFormData({ ...formData, product_name: e.target?.value })} maxLength={40} type='text' name='product_name' id='product_name' className='text-xs h-10' placeholder='E.g   Samsung Smartwatch + colour' />
                                        <div className='flex w-full justify-end items-start'>
                                            <p className='text-xs text-primary/80'>0/40</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Category */}
                                <div className='product-photos w-auto h-auto items-center flex gap-3'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-sm font-medium flex gap-1 items-center'>Category <sup className='text-red-500'>*</sup></h3>
                                        <p className='text-xs text-primary/80 w-sm '>
                                            Choose your product category so that it can be included in your store category list.
                                        </p>
                                    </div>
                                    <div className='w-full h-auto p-3 flex justify-center items-center'>
                                        <Select onValueChange={(value) => setFormData({ ...formData, product_category: value })}>
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

                                {/* Product Description */}
                                <div className='product-photos w-auto h-auto items-start  flex gap-3'>
                                    <div className='flex flex-col gap-2 pt-6'>
                                        <h3 className='text-sm font-medium flex gap-1 items-center'>Product Description <sup className='text-red-500'>*</sup></h3>
                                        <p className='text-xs text-primary/80 w-sm '>
                                            Add a minimum of 3000 words by explaining the category of the product.
                                        </p>
                                    </div>
                                    <div className='w-full h-auto p-3 flex flex-col gap-[2px] justify-center items-center'>
                                        <Textarea onChange={(e) => setFormData({ ...formData, product_description: e.target?.value })} minLength={1500} maxLength={3000} name='product_description' id='product_description' placeholder='Write Product Description' className='text-xs' />
                                        <div className='flex w-full justify-end items-start'>
                                            <p className='text-xs text-primary/80'>0/3000</p>
                                        </div>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                        {/* Specifications */}
                        <Card className='bg-transparent'>
                            <CardHeader className='border-b '>
                                <CardTitle>Specifications</CardTitle>
                            </CardHeader>
                            <CardContent className='space-y-2'>
                                {/* Product Status */}
                                <div className='product-photos w-auto h-auto items-center flex gap-3'>
                                    <div className='flex flex-col w-sm gap-2'>
                                        <h3 className='text-sm font-medium'>Status <sup className='text-red-500'>*</sup></h3>
                                    </div>
                                    <div className='w-full h-auto p-3 gap-3 flex justify-start items-start'>
                                        <Switch onCheckedChange={(checked) => setFormData({ ...formData, status: checked ? 1 : 0 })} id='status' name='status' />
                                        <Label htmlFor='status'>NonActive</Label>
                                    </div>
                                </div>

                                {/* Product Brand */}
                                <div className='product-photos w-auto h-auto items-center flex gap-3'>
                                    <div className='flex flex-col gap-2 w-sm'>
                                        <h3 className='text-sm font-medium flex gap-1 items-center'>Brand <sup className='text-red-500'>*</sup></h3>
                                    </div>
                                    <div className='w-full h-auto p-3 flex justify-center items-center'>
                                        <Select onValueChange={(value) => setFormData({ ...formData, product_brand: value })} name='product_brand'>
                                            <SelectTrigger className="w-full text-xs">
                                                <SelectValue onChange={handleFormData} id='product_brand' placeholder="Select Brand" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="brand-1">Brand 1</SelectItem>
                                                <SelectItem value="brand-2">Brand 2</SelectItem>
                                                <SelectItem value="brand-3">Brand 3</SelectItem>
                                                <SelectItem value="brand-4">Brand 4</SelectItem>
                                                <SelectItem value="brand-5">Brand 5</SelectItem>
                                                <SelectItem value="brand-6">Brand 6</SelectItem>
                                                <SelectItem value="brand-7">Brand 7</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Product Ingredients */}
                                <div className='product-photos w-auto h-auto items-center flex gap-3'>
                                    <div className='flex flex-col gap-2 w-sm'>
                                        <h3 className='text-sm font-medium flex gap-1 items-center'>Ingredients <sup className='text-red-500'>*</sup></h3>
                                    </div>
                                    <div className='w-full h-auto p-3 flex justify-center items-center'>
                                        <Select onValueChange={(value) => setFormData({ ...formData, product_ingredient: value })} name='product_ingredient'>
                                            <SelectTrigger className="w-full text-xs">
                                                <SelectValue id='product_ingredient' placeholder="Select Ingrediets" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ingredient-1">Ingredient 1</SelectItem>
                                                <SelectItem value="ingredient-2">Ingredient 2</SelectItem>
                                                <SelectItem value="ingredient-3">Ingredient 3</SelectItem>
                                                <SelectItem value="ingredient-4">Ingredient 4</SelectItem>
                                                <SelectItem value="ingredient-5">Ingredient 5</SelectItem>
                                                <SelectItem value="ingredient-6">Ingredient 6</SelectItem>
                                                <SelectItem value="ingredient-7">Ingredient 7</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Product SKU */}
                                <div className='product-photos w-auto h-auto items-center flex gap-3'>
                                    <div className='flex flex-col gap-2 w-sm'>
                                        <h3 className='text-sm font-medium flex gap-1 items-center'>Product SKU <sup className='text-red-500'>*</sup></h3>
                                    </div>
                                    <div className='w-full h-auto p-3 flex gap-[2px] flex-col justify-center items-center'>
                                        <Input onChange={(e) => setFormData({ ...formData, product_sku: e.target?.value })} type='text' name='product_sku' id='product_sku' className='text-xs h-10' placeholder='Enter SKU' />
                                    </div>
                                </div>

                                {/* Product Stock */}
                                <div className='product-photos w-auto h-auto items-center flex gap-3'>
                                    <div className='flex flex-col gap-2 w-sm'>
                                        <h3 className='text-sm font-medium flex gap-1 items-center'>Product Stock <sup className='text-red-500'>*</sup></h3>
                                    </div>
                                    <div className='w-full h-auto p-3 flex gap-[2px] flex-col justify-center items-center'>
                                        <Input onChange={(e) => setFormData({ ...formData, product_stock: Number(e.target?.value) })} type='text' name='product_stock' id='product_stock' className='text-xs h-10' placeholder='Enter Stock' />
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                        <div className='flex gap-3 justify-end p-3'>
                            <div className='w-auto h-auto'>
                                <Button className='w-auto text-xs bg-primary-foreground border-secondary/20 border' onClick={handleBack}> Back</Button>
                            </div>
                            <div className='w-auto h-auto'>
                                <Button type='submit' className='w-auto text-xs bg-primary text-primary-foreground border-secondary/20 border' onClick={() => handleSubmit}> Save & Show</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProductPage
