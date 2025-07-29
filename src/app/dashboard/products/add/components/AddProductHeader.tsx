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


const AddProductHeader = () => {
  return (
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
  )
}

export default AddProductHeader
