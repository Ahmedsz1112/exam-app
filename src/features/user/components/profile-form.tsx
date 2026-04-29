"use client"

import { APIResponse } from '@/shared/types/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function ProfileForm() {

    const form = useForm<APIResponse>({
        resolver: zodResolver()
    })


    
  return (


    <div>ProfileForm</div>
  )
}
