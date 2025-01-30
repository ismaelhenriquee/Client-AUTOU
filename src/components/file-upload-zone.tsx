'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Cloud, File } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FileUploadZone() {
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'text/*': ['.txt', '.pdf']
        }
    });

    return (
        <div className=" flex flex-col w-full">
            <div
                {...getRootProps()}
                className={cn(
                    '  w-full relative mt-4 flex h-[500px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-background/50 hover:bg-background/80 transition-colors duration-200',
                    'dark:border-gray-600 dark:hover:border-gray-500 bg-amber-500',
                    isDragActive && 'border-primary bg-primary/5'
                )}
            >
                <input
                    className="h-80 bg-slate-600"
                    {...getInputProps()}
                />
                <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                    <Cloud
                        className={cn(
                            'h-12 w-12 text-muted-foreground mb-4',
                            isDragActive && 'text-primary animate-bounce'
                        )}
                    />
                    <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span>{' '}
                        or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Text files (TXT, MD, DOC, DOCX)
                    </p>
                </div>
                {files.length > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur p-4 rounded-b-lg border-t">
                        <div className="flex items-center gap-2">
                            <File className="h-4 w-4 text-primary" />
                            <span className="text-sm truncate">
                                {files[0].name}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
