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
import { toast } from 'sonner'

// Api Url
const apiUrl = process.env.API_URL;

const AddProductPage = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
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
        console.log(error)

    })

    const handleFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = event.target;
        if (event.target.name === "product_images" && files && files.length > 9) {
            setError("You can upload a maximum of 9 pictures.");
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
        console.log(formData);
    };

    // Handle Submit Button
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!formData.product_images) return toast.error("Product Pictures are required");
        else if (formData.product_images.length === 0) return toast.error("Product Pictures are required");


        try {
            const response = await axios.post('http://localhost:3000/api/products/add', formData);
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
                                        <p className='text-xs w-sm text-primary/80'>The image format must be .png or .jpg.
                                            The recommended size is 250x250 pixels.
                                            Please upload at least 3 images to attract users. </p>
                                    </div>
                                    <div className='w-auto h-auto p-3 flex flex-col gap-1 justify-center'>
                                        <Card className='w-[110px] h-[120px] flex justify-center items-center '>
                                            <CardContent className='flex justify-center items-center gap-1 flex-col p-0'>
                                                <Image size={24} />
                                                <h4 className='text-xs text-primary font-semibold'>Add Photos</h4>
                                                <p className='text-xs text-primary/50'>{formData.product_images.length}/9</p>
                                                <Input name='product_images' id='product_images' type="file" multiple className='' accept=".jpeg, .jpg, .png" onChange={(e) => {
                                                    const files = (e.target.files)
                                                    if (files && files.length > 0) {
                                                        const images = Array.from(files);
                                                        setFormData({ ...formData, product_images: images })
                                                        Array.from(files).forEach((file) => {
                                                            const img = new window.Image();
                                                            img.src = URL.createObjectURL(file);
                                                            img.onload = () => {
                                                                const width = img.naturalWidth;
                                                                const height = img.naturalHeight;

                                                                if (width > 512 || height > 512) {
                                                                    toast.error(`"${file.name}" exceeds 250x250 size.`);
                                                                }
                                                                if (width < 250 || height < 250) {
                                                                    toast.error(`"${file.name}" must be at least 250x250 pixels.`);
                                                                }
                                                            };
                                                        })

                                                    }
                                                }
                                                } />
                                            </CardContent>
                                        </Card>
                                        {formData.product_images.length > 9 && <p className="text-red-500 text-xs">You can upload a maximum of 9 pictures.</p>}
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
                                    <div className='w-auto h-auto p-3 flex flex-col gap-1 justify-center items-center'>
                                        <Card className='w-[110px] h-[120px] flex justify-center items-center '>
                                            <CardContent className='flex justify-center items-center gap-1 flex-col p-0'>
                                                <Video size={24} />
                                                <h4 className='text-xs text-primary font-semibold'>Add Video</h4>
                                                <Input name='product_video' id='product_video' type="file" className='' accept='video/mp4,video/*' onChange={(e) => {
                                                    const file = e.target.files?.[0]
                                                    if (file) {
                                                        setFormData({ ...formData, product_video: [file] })
                                                        const maxSize = 3000 * 1024 * 1024;
                                                        if (file.size > maxSize) {
                                                            toast.error(`"${file.name}" exceeds max size of 3000MB.`);
                                                            return;
                                                        }
                                                        const video = document.createElement('video');
                                                        video.preload = 'metadata';
                                                        video.src = URL.createObjectURL(file);

                                                        video.onloadedmetadata = () => {
                                                            URL.revokeObjectURL(video.src);
                                                            const { duration, videoWidth: w, videoHeight: h } = video;

                                                            if (duration < 10 || duration > 60)
                                                                return toast.error(`"${file.name}" must be 10-60 sec long.`);

                                                            if (w > 1200 || h > 1200)
                                                                return toast.error(`"${file.name}" exceeds 1200x1200 resolution.`);
                                                        }
                                                    }
                                                }
                                                } />
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
                                        <Input onChange={(e) => {
                                            const words = e.target?.value.trim().split(/\s+/);
                                            if (words.length > 40) return setError("product Name should not be exceed of 40 words")
                                            else if (words.length < 40) return setError(null)
                                            else {
                                                setFormData({ ...formData, product_name: e.target?.value })
                                            }
                                        }}
                                            type='text' name='product_name' id='product_name' className='text-xs h-10' placeholder='E.g   Samsung Smartwatch + colour' />
                                        <div className='flex w-full justify-between items-start'>
                                            <p className="text-red-500 text-xs">{error && "Product Name should not be exceed 40 words"}</p>
                                            <p className='text-xs text-primary/80'>{formData.product_name.trim().split(/\s+/).length }/40</p>
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
                                        <Input onChange={(e) => console.log(e.target?.value)} type='text' name='product_stock' id='product_stock' className='text-xs h-10' placeholder='Enter Stock' />
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
