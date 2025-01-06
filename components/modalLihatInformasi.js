import React from "react";
import {
  Dialog,
  Typography,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// PENGAIT KAMI
import useSuntingInformasi from "@/hooks/backend/useSuntingInformasi";
// KONSTANTA KAMI
import { formatRupiah } from "@/constants/formatRupiah";

const ModalLihatInformasi = ({ terbuka, tertutup, informasiYangTerpilih }) => {
  const {
    noRekening,
    namaInformasi,
    hargaInformasi,
    deskripsiInformasi,
    pemilikInformasi,
  } = useSuntingInformasi(informasiYangTerpilih);

  return (
    <Dialog
      open={terbuka}
      handler={tertutup}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      size="sm"
      className="bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-4 rounded-lg shadow-2xl"
    >
      <div className="absolute top-3 right-3">
        <IconButton
          variant="text"
          color="red"
          onClick={() => tertutup(false)}
          className="text-red-500 hover:bg-red-100 transition duration-200 rounded-full"
        >
          <XMarkIcon className="h-6 w-6" />
        </IconButton>
      </div>

      <DialogHeader className="text-black font-bold text-xl border-b border-gray-200">
        Informasi
      </DialogHeader>
      <DialogBody divider className="p-6 space-y-4">
        <div className="space-y-2">
          <Typography className="font-semibold text-lg text-indigo-600 text-center mb-6">
            {namaInformasi}
          </Typography>
          <div className="flex justify-between items-center">
            <Typography className="text-gray-600">
              <span className="font-semibold">Nomor Rekening:</span>{" "}
              {noRekening}
            </Typography>
            <Typography className="text-gray-600">
              <span className="font-semibold">Pemilik:</span> {pemilikInformasi}
            </Typography>
          </div>
          <div className="flex justify-between items-center">
            <Typography className="text-gray-700">
              <span className="font-semibold">Deskripsi:</span>{" "}
              {deskripsiInformasi}
            </Typography>
            <Typography className="text-green-600 font-bold text-lg">
              Harga: {formatRupiah(hargaInformasi)}
            </Typography>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="outlined"
          color="gray"
          onClick={() => tertutup(false)}
          className="hover:bg-gray-200 transition duration-200"
        >
          Tutup
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ModalLihatInformasi;
