'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

type BandMember = {
    id: string
    name: string
    role: string
    instrument: string
    bio: string
    quote: string
    socialMedia: {
        instagram: string
        twitter: string
    }
}

type Show = {
    id: string
    date: string
    venue: string
    location: string
}

type GalleryImage = {
    id: string
    file: File | null
    preview: string
}

const dummyMembers: BandMember[] = [
    {
        id: '1',
        name: "Alex",
        role: "Lead Vocals",
        instrument: "Microphone",
        bio: "With a voice that can shatter reality, Alex leads the band with raw emotion and unparalleled stage presence.",
        quote: "Music is the key that unlocks the doors of perception.",
        socialMedia: { instagram: "@alex_realitybreak", twitter: "@alexsings_rb" }
    },
    {
        id: '2',
        name: "Sam",
        role: "Lead Guitar",
        instrument: "Electric Guitar",
        bio: "Sam's guitar riffs are like lightning strikes, electrifying the audience and bending the fabric of sound.",
        quote: "I don't play the guitar, I channel the universe through six strings.",
        socialMedia: { instagram: "@sam_shreds", twitter: "@samguitar_rb" }
    }
]

const dummyShows: Show[] = [
    {
        id: '1',
        date: "2025-02-13",
        venue: "ALEXANDRA PALACE",
        location: "LONDON, UNITED KINGDOM"
    },
    {
        id: '2',
        date: "2025-02-15",
        venue: "COLUMBIAHALLE",
        location: "BERLIN, GERMANY"
    }
]

const dummyGalleryImages: GalleryImage[] = [
    {
        id: '1',
        file: null,
        preview: "/placeholder.svg?height=600&width=800&text=Live+Performance+1"
    },
    {
        id: '2',
        file: null,
        preview: "/placeholder.svg?height=600&width=800&text=Band+Photo+1"
    }
]


export default function Dashboard() {
    const [bandMembers, setBandMembers] = useState<BandMember[]>(dummyMembers)
    const [shows, setShows] = useState<Show[]>(dummyShows)
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(dummyGalleryImages)

    const [editingMember, setEditingMember] = useState<any>(null)
    const [editingShow, setEditingShow] = useState<any>(null)

    const addOrUpdateBandMember = () => {
        if (editingMember) {
            if (editingMember.name && editingMember.role) {
                setBandMembers(bandMembers.map(member =>
                    member.id === editingMember.id ? editingMember : member
                ))
                setEditingMember(null)
            }
        } else {
            if (editingMember.name && editingMember?.role) {
                setBandMembers([...bandMembers, { ...editingMember, id: Date.now().toString() } as BandMember])
                setEditingMember(null)
            }
        }
    }

    const startEditingMember = (member: BandMember) => {
        setEditingMember({ ...member })
    }

    const cancelEditingMember = () => {
        setEditingMember(null)
    }

    const addOrUpdateShow = () => {
        if (editingShow) {
            if (editingShow.date && editingShow.venue && editingShow.location) {
                setShows(shows.map(show =>
                    show.id === editingShow.id ? editingShow : show
                ))
                setEditingShow(null)
            }
        } else {
            if (editingShow?.date && editingShow?.venue && editingShow?.location) {
                setShows([...shows, { ...editingShow, id: Date.now().toString() } as Show])
                setEditingShow(null)
            }
        }
    }

    const startEditingShow = (show: Show) => {
        setEditingShow({ ...show })
    }

    const cancelEditingShow = () => {
        setEditingShow(null)
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const newImage: GalleryImage = {
                id: Date.now().toString(),
                file: file,
                preview: URL.createObjectURL(file)
            }
            setGalleryImages([...galleryImages, newImage])
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8">Reality Break Dashboard</h1>

            <Tabs defaultValue="members">
                <TabsList className="mb-4">
                    <TabsTrigger value="members">Band Members</TabsTrigger>
                    <TabsTrigger value="shows">Shows</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="members">
                    <Card>
                        <CardHeader>
                            <CardTitle>Band Members</CardTitle>
                            <CardDescription>Add or edit band members here.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {bandMembers.map(member => (
                                    <div key={member.id} className="flex items-center space-x-2">
                                        <span>{member.name} - {member.role}</span>
                                        <Button onClick={() => startEditingMember(member)}>Edit</Button>
                                        <Button variant="destructive" onClick={() => setBandMembers(bandMembers.filter(m => m.id !== member.id))}>Remove</Button>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 space-y-2">
                                <Input
                                    placeholder="Name"
                                    value={editingMember?.name || ''}
                                    onChange={e => setEditingMember((prev: any) => prev ? { ...prev, name: e.target.value } : null)}
                                />
                                <Input
                                    placeholder="Role"
                                    value={editingMember?.role || ''}
                                    onChange={e => setEditingMember((prev: any) => prev ? { ...prev, role: e.target.value } : null)}
                                />
                                <Input
                                    placeholder="Instrument"
                                    value={editingMember?.instrument || ''}
                                    onChange={e => setEditingMember((prev: any) => prev ? { ...prev, instrument: e.target.value } : null)}
                                />
                                <Textarea
                                    placeholder="Bio"
                                    value={editingMember?.bio || ''}
                                    onChange={e => setEditingMember((prev: any) => prev ? { ...prev, bio: e.target.value } : null)}
                                />
                                <Input
                                    placeholder="Quote"
                                    value={editingMember?.quote || ''}
                                    onChange={e => setEditingMember((prev: any) => prev ? { ...prev, quote: e.target.value } : null)}
                                />
                                <Input
                                    placeholder="Instagram"
                                    value={editingMember?.socialMedia?.instagram || ''}
                                    onChange={e => setEditingMember((prev: any) => prev ? { ...prev, socialMedia: { ...prev.socialMedia, instagram: e.target.value } } : null)}
                                />
                                <Input
                                    placeholder="Twitter"
                                    value={editingMember?.socialMedia?.twitter || ''}
                                    onChange={e => setEditingMember((prev: any) => prev ? { ...prev, socialMedia: { ...prev.socialMedia, twitter: e.target.value } } : null)}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={addOrUpdateBandMember}>{editingMember?.id ? 'Update' : 'Add'} Band Member</Button>
                            {editingMember?.id && <Button onClick={cancelEditingMember} variant="outline" className="ml-2">Cancel</Button>}
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="shows">
                    <Card>
                        <CardHeader>
                            <CardTitle>Shows</CardTitle>
                            <CardDescription>Add or edit upcoming shows here.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {shows.map(show => (
                                    <div key={show.id} className="flex items-center space-x-2">
                                        <span>{show.date} - {show.venue}, {show.location}</span>
                                        <Button onClick={() => startEditingShow(show)}>Edit</Button>
                                        <Button variant="destructive" onClick={() => setShows(shows.filter(s => s.id !== show.id))}>Remove</Button>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 space-y-2">
                                <Input
                                    type="date"
                                    value={editingShow?.date || ''}
                                    onChange={e => setEditingShow((prev: any) => prev ? { ...prev, date: e.target.value } : null)}
                                />
                                <Input
                                    placeholder="Venue"
                                    value={editingShow?.venue || ''}
                                    onChange={e => setEditingShow((prev: any) => prev ? { ...prev, venue: e.target.value } : null)}
                                />
                                <Input
                                    placeholder="Location"
                                    value={editingShow?.location || ''}
                                    onChange={e => setEditingShow((prev: any) => prev ? { ...prev, location: e.target.value } : null)}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={addOrUpdateShow}>{editingShow?.id ? 'Update' : 'Add'} Show</Button>
                            {editingShow?.id && <Button onClick={cancelEditingShow} variant="outline" className="ml-2">Cancel</Button>}
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="gallery">
                    <Card>
                        <CardHeader>
                            <CardTitle>Gallery</CardTitle>
                            <CardDescription>Add or edit gallery images here.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-4">
                                {galleryImages.map(image => (
                                    <div key={image.id} className="relative">
                                        <img src={image.preview} alt="Gallery preview" className="w-full h-40 object-cover rounded" />
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            className="absolute top-2 right-2"
                                            onClick={() => setGalleryImages(galleryImages.filter(img => img.id !== image.id))}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="image-upload" className="block mb-2">Upload Image</Label>
                                <Input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}