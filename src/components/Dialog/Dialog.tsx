import "./Dialog.scss"
import { useEffect } from "react";
import { createPortal } from "react-dom";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  fullScreen?: boolean;
  alert?: boolean;
}

export const Dialog = ({ isOpen, onClose, children, fullScreen, alert = false }: DialogProps) => {
//   const el = document.getElementById("dialogRoot");
    const el = typeof document !== 'undefined'
            ? document.getElementById('dialogRoot') ?? document.body
            : null;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !el) return null;

  return createPortal(
    <div className={fullScreen ? 'dialog-wrap fullscreen' : 'dialog-wrap' }>
        <div className="dim"></div>
        <div className="dialog">
            <div className="dialog-content">
                {children}
            </div>

            {!alert &&
                <button type="button" className="btn-close" onClick={onClose}><span>닫기</span></button>
            }
        </div>
    </div>,
    el
  );
}
