"use client";

import { Button } from "@/components/ui/button";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-b-gray-700 backdrop-blur-3xl">
      
      <div className="container flex items-center justify-end h-14">
          
          <Button variant="default">
					  Login
					</Button>
      </div>
    </header>
  )
}