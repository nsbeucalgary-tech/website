import { colors } from "@/app/lib/helper";
import { Exec } from "@/app/lib/type";
import { deleteExecAction } from "./action";

export default function DeleteExecModal({
    exec,
    onClose,
}: {
    exec: Exec;
    onClose: () => void;
}) {
    const handleDelete = async () => {
        console.log("Delete exec", exec);
        await deleteExecAction(exec.exec_id);
        onClose();
    };
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full text-gray-700">
                <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: colors.red }}
                >
                    Delete Exec
                </h3>

                <p className="mb-6">
                    Are you sure you want to delete{" "}
                    <strong>{exec.fname} {exec.lname}</strong>?
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border"
                    >
                        Cancel
                    </button>

                    <button
                        className="px-4 py-2 rounded-lg text-white font-bold"
                        style={{ backgroundColor: colors.red }}
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
