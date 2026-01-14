import { colors } from "@/app/lib/helper";
import { Sponsor } from "@/app/lib/type";
import { deleteSponsorAction } from "./action"; // Update import
import { Trash2 } from "lucide-react";

export default function DeleteSponsorModal({
    sponsor,
    onClose,
}: {
    sponsor: Sponsor;
    onClose: () => void;
}) {
    const handleDelete = async () => {
        console.log("Delete sponsor", sponsor);
        await deleteSponsorAction(sponsor.company_id);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl p-8 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-center space-y-6">
                    <div
                        className="w-24 h-24 mx-auto rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${colors.red}20` }}
                    >
                        <Trash2
                            className="w-12 h-12"
                            style={{ color: colors.red }}
                        />
                    </div>

                    <div>
                        <h2
                            className="text-2xl font-bold mb-2"
                            style={{
                                color: colors.red,
                                fontFamily: "impact, sans-serif",
                            }}
                        >
                            DELETE SPONSOR
                        </h2>
                        <p
                            className="text-lg font-semibold mb-1"
                            style={{
                                color: colors.black,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            {sponsor.company_name}
                        </p>
                    </div>

                    <p
                        className="text-base"
                        style={{
                            color: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Are you sure you want to delete this sponsor? This
                        action cannot be undone.
                    </p>

                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 px-6 py-3 rounded-xl font-bold bg-gray-200 hover:bg-gray-300 transition"
                            style={{ fontFamily: "nunito, sans-serif" }}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDelete}
                            className="flex-1 px-6 py-3 rounded-xl font-bold text-white transition hover:scale-105"
                            style={{
                                backgroundColor: colors.red,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
