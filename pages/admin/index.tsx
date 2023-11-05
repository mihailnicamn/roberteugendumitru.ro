import React, { useReducer, useRef, useMemo,useState } from 'react'
import Image from 'next/image'
import Navbar from '../../components/nav'
import axios from 'axios'
import { NextUIProvider } from "@nextui-org/react";
import { Card, Textarea, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
const getHash = (str: string, length: number) => {
    const rand = Math.random().toString(36).substr(2, length);
    return `${str.substr(0, length)}-${rand}`
}
const AddMetadataForm = ({ value, onChange }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [metadata, setMetadata] = useReducer(
        (state: any, newState: any) => {
            const update = newState(state)
            if (typeof onChange === 'function') onChange(update);
            return update
        },
        {
            ...value
        }
    )
    const label = useMemo(() => {
        const keys = Object.keys(metadata)
        if (keys.length === 0) return 'No Metadata'
        return `${keys.length} Metadata Fields`
    }, [metadata])
    return (<>
        <Button onPress={onOpen}>{label}</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Metadata</ModalHeader>
                        <ModalBody>
                            {Object.keys(metadata).map((key, index) => {
                                return (<>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row gap-1'>
                                            <Input
                                                placeholder={key}
                                                label="Field"
                                                value={key}
                                                type="text" onChange={(e) => {
                                                    setMetadata((state) => {
                                                        let list = Object.keys(state).map((_key) => ({ [_key]: state[_key] }))
                                                        delete list[index][key]
                                                        list[index][e.target.value] = list[index][key]
                                                        return list.reduce((acc, cur) => ({ ...acc, ...cur }), {})
                                                    })
                                                }} />
                                            <Input
                                                placeholder={`${key} value`}
                                                label="Value"
                                                value={metadata[key]}
                                                type="text" onChange={(e) => {
                                                    setMetadata((state) => {
                                                        state[key] = e.target.value
                                                        return { ...state }
                                                    })
                                                }} />
                                        </div>
                                        <Button color='danger'
                                            onPress={(e) => setMetadata((state) => {
                                                let list = Object.keys(state).map((_key) => ({ [_key]: state[_key] }))
                                                list = list.filter((_, _i) => _i !== index)
                                                return list.reduce((acc, cur) => ({ ...acc, ...cur }), {})
                                            })}
                                        >Remove</Button>
                                    </div>
                                </>)
                            })}
                            <Button color="primary" variant="light" onPress={(e) => setMetadata((state) => {
                                return { ...state, [`field-${Object.keys(metadata).length}`]: '' }
                            })}>
                                <b>Add Field</b>
                            </Button>
                        </ModalBody>
                        <ModalFooter className='w-full flex justify-center items-center'>
                            <Button color="danger" variant="light" onPress={onClose}>
                                <b>Close</b>
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    </>)
}
const PreviewImage = ({ src }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (<>
        <Image src={src}
            onClick={onOpen}
            width={50}
            height={50}
            style={{
                height: 50,
                width: 50,
                cursor: 'pointer'
            }} />
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Preview</ModalHeader>
                        <ModalBody>
                            <Image src={src} width={500} height={500} />
                        </ModalBody>
                        <ModalFooter className='w-full flex justify-center items-center'>
                            <Button color="danger" variant="light" onPress={onClose}>
                                <b>Close</b>
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    </>)
}

const AddProject = ({hydrate}) => {
    const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();
    const [form, setForm] = useReducer(
        (state: any, newState: any) => ({ ...state, ...newState }),
        {
            name: '',
            description: '',
            images: [],
            plans: [],
            metadata: {
                location:''
            },
        }
    )
    const imagesRef = useRef(null as any)
    const plansRef = useRef(null as any)
    const open = {
        picker: {
            images: () => imagesRef?.current && imagesRef.current.click(),
            plans: () => plansRef?.current && plansRef.current.click(),
        }
    }
    const loadFile = (name, event) => {
        setForm({ [name]: [...event.target.files] })
    }
    const labels = {
        images: useMemo(() => form.images.length > 0 ? `${form.images.length} Images Selected` : 'Choose Images', [form.images]),
        plans: useMemo(() => form.plans.length > 0 ? `${form.plans.length} Plans Selected` : 'Choose Plans', [form.plans]),
    }
    const submit = async () => {
        const formData = new FormData()
        formData.append('name', form.name)
        formData.append('description', form.description)
        formData.append('metadata', JSON.stringify(form.metadata))
        for (let i = 0; i < form.plans.length; i++) formData.append('plans', form.plans[i])
        for (let i = 0; i < form.images.length; i++) formData.append('images', form.images[i])
        const randId = Math.random().toString(36).substr(2, 10);
        axios.post('/admin/api/uploadToProject/'+randId, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            onClose()
            hydrate()
        })
    }
    return (<>

        <Button onPress={onOpen}>Add Project</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Add New Project</ModalHeader>
                        <ModalBody>
                            <Input
                                placeholder='Much project, very design, aestetics wow 😂🐶💹'
                                label="Name"
                                type="text" onChange={(e) => setForm({ name: e.target.value })} />
                            <Textarea
                                placeholder='Fancy long text about the project 👍'
                                label="Description"
                                value={form.description} onChange={(e) => setForm({ description: e.target.value })} />
                            <div className="flex flex-row justify-center gap-10">
                                <Button onClick={open.picker.images}>{labels.images}</Button>
                                <Button onClick={open.picker.plans}>{labels.plans}</Button>
                            </div>
                            <input ref={imagesRef} type="file" multiple onChange={(e) => loadFile('images', e)} className='hidden' />
                            <input ref={plansRef} type="file" multiple onChange={(e) => loadFile('plans', e)} className='hidden' />
                            <div className='flex flex-col gap-2'>
                                {[...form.images].map((file, index) => {
                                    const preview = URL.createObjectURL(file)
                                    return (<>
                                        <Card className='w-full flex flex-row p-2 justify-between' key={`image-${index}`}>
                                            <PreviewImage src={preview} />
                                            <div>Image : {getHash(file.name, 10)}</div>
                                            <Button color='danger'
                                                onPress={(e) => setForm({ images: form.images.filter((__i, _i) => _i !== index) })}
                                            >Remove</Button>
                                        </Card>
                                    </>)
                                })}
                                {[...form.plans].map((file, index) => {
                                    const preview = URL.createObjectURL(file)
                                    return (<>
                                        <Card className='w-full flex flex-row p-2 justify-between' key={`plans-${index}`}>
                                            <PreviewImage src={preview} />
                                            <div>Plan : {getHash(file.name, 10)}</div>
                                            <Button color='danger'
                                                onPress={(e) => setForm({ plans: form.plans.filter((__i, _i) => _i !== index) })}
                                            >Remove</Button>
                                        </Card>
                                    </>)
                                })}
                            </div>
                            <AddMetadataForm value={form.metadata} onChange={(e)=>setForm({metadata:e})} />
                        </ModalBody>
                        <ModalFooter className='w-full flex justify-center items-center'>
                            <Button color="danger" variant="light" onPress={onClose}>
                                <b>Close</b>
                            </Button>
                            <Button color="primary" onPress={submit}>
                                <b>Save</b>
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    </>)
}

export default function Home({projects}) {
    const [list, setList] = useState(projects)
    const hydrate = () => {
        axios.get('http://under-construction.roberteugendumitru.ro/api/projects')
            .then((res) => {
                setList(res.data)
            })
    }
    return (
        <>
            <Navbar />
                <NextUIProvider>
            <main className={`flex flex-col min-h-screen w-screen gap-10`}>
                <div className='flex flex-row justify-center items-center w-screen'>
                    <AddProject hydrate={hydrate} />
                </div>
                    <div className='flex flex-col justify-center items-center w-screen p-10'>
                    {list.map((project) => {
                        return (<>
                            <Card className='w-full m-10 p-4 flex flex-row justify-between'>
                                <div>
                                    <span>
                                        {project?.name || project.id}
                                    </span>
                                </div>
                                <div>
                                    <Button color='primary'>Edit</Button>
                                    <Button color='danger' onClick={()=>{
                                        axios.post('http://under-construction.roberteugendumitru.ro/admin/api/removeProject/'+project.id)
                                        .then((res)=>{
                                            hydrate()
                                        })
                                    }}>Delete</Button>
                                </div>
                            </Card>
                        </>)
                    })}
                    </div>
            </main>
            </NextUIProvider>
        </>
    )
}


export async function getServerSideProps() {
    const res = await axios.get('http://under-construction.roberteugendumitru.ro/api/projects')
    .then((res) => res.data)
    .catch((err) => {
        const message = err?.response?.data?.message || err?.message || 'Something went wrong'
        console.log(message)
        return []
    })
    return {
        props: {
            projects: res
        }
    }
}