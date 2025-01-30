import { FileUploadZone } from '@/components/file-upload-zone';
import { SignupPopup } from '@/components/signup-popup';

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <main className="pt-16 min-h-screen  ">
                <div className="py-6 flex flex-col  ">
                   
                    <FileUploadZone />
                </div>
            </main>
            <SignupPopup />
        </div>
    );
}
