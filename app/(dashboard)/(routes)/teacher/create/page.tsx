'use client'

import * as z from 'zod'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter} from 'next/navigation'

import {
    Form,
    
} from '@/components/ui/form'

const formSchema = z.object({
    title : z.string().min(1, {
        message : 'Title is required'
    })
})

const CreatePage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),
        defaultValues : {
            title : ''
        }
    })

    //const { isSumbitting, isValid}
  return (
    <div>
      @
    </div>
  )
}

export default CreatePage
