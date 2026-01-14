import { X } from "lucide-react";
import { colors } from "@/app/lib/helper";
import type { Event, NewEvent } from "@/app/lib/type";
import EventForm from "./EventForm";
import { editEventAction } from "./actions";

export default function EditEventModal({
    event,
    onClose,
}: {
    event: Event;
    onClose: () => void;
}) {
    // ...existing code...
    const isEvent = (d: Event | NewEvent): d is Event =>
        (d as Event).event_id !== undefined;

    const handleEdit = async (data: Event | NewEvent): Promise<void> => {
        const updatedEvent: Event = isEvent(data)
            ? data
            : { ...data, event_id: event.event_id };

        await editEventAction(updatedEvent.event_id, updatedEvent);
        onClose();
    };
    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header - Fixed */}
                <div
                    className="sticky top-0 bg-white border-b-2 px-8 py-6 flex items-center justify-between z-10 rounded-t-2xl"
                    style={{ borderColor: colors.gray }}
                >
                    <h2
                        className="text-3xl font-extrabold"
                        style={{
                            color: colors.primary,
                            fontFamily: "impact, sans-serif",
                        }}
                    >
                        EDIT EVENT - {event.event_name}
                    </h2>

                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: colors.red }}
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>
                <div className="overflow-y-auto px-8 py-6 flex-1 scrollbar-thin scrollbar-thumb-[#2bb463] scrollbar-track-gray-100">
                    <EventForm
                        initialData={event}
                        onSubmitAction={handleEdit}
                        onCancelAction={onClose}
                    />
                </div>
            </div>
        </div>
    );
}
