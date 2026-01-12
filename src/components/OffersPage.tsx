// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Building2, CheckCircle2, XCircle, ArrowLeft, AlertCircle } from 'lucide-react';

// // --- Types & Interfaces ---
// interface LenderResponse {
//   isEligible?: boolean;
//   success?: boolean;
//   statusCode?: number;
//   message?: string;
//   data?: {
//     response?: {
//       WINDOW?: string;
//     };
//     resData?: {
//       reason?: string;
//     };
//     reqBody?: { income?: number | string };
//     reqData?: { net_mothlyincome?: number | string };
//     requestBody?: { data?: { salary?: number | string } };
//   };
// }

// interface ApiData {
//   data?: Record<string, LenderResponse>;
//   [key: string]: any; 
// }

// interface Offer {
//   name: string;
//   message: string;
//   isEligible: boolean;
//   amount: number;
//   status: string;
// }

// interface OffersPageProps {
//   apiData: ApiData;
// }

// const OffersPage: React.FC<OffersPageProps> = ({ apiData }) => {
  
//   const LENDER_LINKS: Record<string, string> = {
//     "Zype": "https://www.getzype.com/",
//     "MPokket": "https://www.mpokket.in/",
//     "lendingPlate": "https://lendingplate.com/",
//     "CredittPlus": "https://www.credittnow.com/",
//     "default": "https://qicky.in"
//   };

//   const handleApply = (lenderName: string): void => {
//     const url = LENDER_LINKS[lenderName] || LENDER_LINKS["default"];
//     window.open(url, "_blank");
//   };

//   const mapOffers = (data: ApiData): Offer[] => {
//     const source = data?.data || data;
//     if (!source || typeof source !== 'object') return [];
    
//     return Object.entries(source).map(([key, value]) => {
//       if (!value || typeof value !== 'object') return null; 

//       const val = value as LenderResponse;
//       let isEligible = false;

//       if (val.isEligible !== undefined) isEligible = val.isEligible;
//       else if (val.success !== undefined) isEligible = val.success;
//       else if (val.statusCode === 200) isEligible = true;

//       // Special check for CredittPlus
//       if (key === 'CredittPlus' && val.data?.response?.WINDOW !== "OPEN") {
//         isEligible = false;
//       }

//       let displayMessage = val.message || val.data?.resData?.reason || "Status Updated";
      
//       if (displayMessage.includes("DOB_OUT_OF_RANGE")) displayMessage = "Age criteria mismatch";
//       if (displayMessage.includes("Pincode is blank")) displayMessage = "Location data missing";
//       if (displayMessage.toUpperCase().includes("SUCCESS") && isEligible) displayMessage = "Offer Available";

//       const rawAmount = 
//         val.data?.reqBody?.income || 
//         val.data?.reqData?.net_mothlyincome || 
//         val.data?.requestBody?.data?.salary || 50000;
      
//       const finalAmount = Math.min(Number(rawAmount), 500000);

//       return {
//         name: key,
//         message: displayMessage,
//         isEligible: isEligible,
//         amount: finalAmount,
//         status: isEligible ? "Eligible" : "Not Eligible"
//       };
//     }).filter((offer): offer is Offer => offer !== null);
//   };

//   const offers = mapOffers(apiData);

//   return (
//     <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10 font-sans text-slate-900">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h1 className="text-3xl font-black tracking-tight">Loan Offers</h1>
//             <p className="text-slate-500 font-medium">Found {offers.length} lenders for your profile</p>
//           </div>
//           <button 
//             onClick={() => window.location.reload()} 
//             className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all shadow-sm"
//           >
//             <ArrowLeft size={20} className="text-slate-600" />
//           </button>
//         </div>

//         {/* Offers List */}
//         <div className="space-y-4">
//           {offers.length > 0 ? (
//             offers.map((offer, index) => (
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 key={offer.name}
//                 className={`relative overflow-hidden bg-white border-2 rounded-[2rem] p-6 transition-all 
//                   ${offer.isEligible ? 'border-blue-100 shadow-xl shadow-blue-50' : 'border-slate-100 opacity-75'}`}
//               >
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
//                   <div className="flex items-center gap-5">
//                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center 
//                       ${offer.isEligible ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
//                       <Building2 size={28} />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-black">{offer.name}</h3>
//                       <div className="flex items-center gap-1.5 mt-1">
//                         {offer.isEligible ? (
//                           <CheckCircle2 size={14} className="text-green-500" />
//                         ) : (
//                           <XCircle size={14} className="text-red-400" />
//                         )}
//                         <span className={`text-[10px] font-bold uppercase tracking-wider 
//                           ${offer.isEligible ? 'text-green-600' : 'text-slate-400'}`}>
//                           {offer.message}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex gap-10">
//                     <div>
//                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
//                       <p className={`font-bold text-sm ${offer.isEligible ? 'text-blue-600' : 'text-slate-900'}`}>
//                         {offer.status}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Limit Up To</p>
//                       <p className="font-bold text-sm">₹{offer.amount.toLocaleString()}</p>
//                     </div>
//                   </div>

//                   <button
//                     disabled={!offer.isEligible}
//                     onClick={() => handleApply(offer.name)}
//                     className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all 
//                       ${offer.isEligible 
//                         ? 'bg-slate-900 text-white hover:bg-blue-600 shadow-lg active:scale-95' 
//                         : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}
//                   >
//                     {offer.isEligible ? 'Apply Now' : 'Not Eligible'}
//                   </button>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
//               <AlertCircle size={48} className="mx-auto text-slate-300 mb-4" />
//               <h3 className="text-lg font-bold">Checking Offers...</h3>
//               <p className="text-slate-500">If this takes too long, please refresh.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OffersPage;

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, XCircle, ArrowLeft, AlertCircle, ExternalLink, Sparkles } from 'lucide-react';

// --- Types & Interfaces (Same as provided) ---
interface LenderResponse {
  isEligible?: boolean;
  success?: boolean;
  statusCode?: number;
  message?: string;
  data?: {
    response?: { WINDOW?: string };
    resData?: { reason?: string };
    reqBody?: { income?: number | string };
    reqData?: { net_mothlyincome?: number | string };
    requestBody?: { data?: { salary?: number | string } };
  };
}

interface ApiData {
  data?: Record<string, LenderResponse>;
  [key: string]: any; 
}

interface Offer {
  name: string;
  message: string;
  isEligible: boolean;
  amount: number;
  status: string;
}

interface OffersPageProps {
  apiData: ApiData;
}

const OffersPage: React.FC<OffersPageProps> = ({ apiData }) => {
  
  const LENDER_LINKS: Record<string, string> = {
    "Zype": "https://www.getzype.com/",
    "MPokket": "https://www.mpokket.in/",
    "lendingPlate": "https://lendingplate.com/",
    "CredittPlus": "https://www.credittnow.com/",
    "default": "https://qicky.in"
  };

  const handleApply = (lenderName: string): void => {
    const url = LENDER_LINKS[lenderName] || LENDER_LINKS["default"];
    window.open(url, "_blank");
  };

  const mapOffers = (data: ApiData): Offer[] => {
    const source = data?.data || data;
    if (!source || typeof source !== 'object') return [];
    
    return Object.entries(source).map(([key, value]) => {
      if (!value || typeof value !== 'object') return null; 

      const val = value as LenderResponse;
      let isEligible = false;

      if (val.isEligible !== undefined) isEligible = val.isEligible;
      else if (val.success !== undefined) isEligible = val.success;
      else if (val.statusCode === 200) isEligible = true;

      if (key === 'CredittPlus' && val.data?.response?.WINDOW !== "OPEN") {
        isEligible = false;
      }

      let displayMessage = val.message || val.data?.resData?.reason || "Status Updated";
      
      if (displayMessage.includes("DOB_OUT_OF_RANGE")) displayMessage = "Age criteria mismatch";
      if (displayMessage.includes("Pincode is blank")) displayMessage = "Location data missing";
      if (displayMessage.toUpperCase().includes("SUCCESS") && isEligible) displayMessage = "Offer Available";

      const rawAmount = 
        val.data?.reqBody?.income || 
        val.data?.reqData?.net_mothlyincome || 
        val.data?.requestBody?.data?.salary || 50000;
      
      const finalAmount = Math.min(Number(rawAmount), 500000);

      return {
        name: key,
        message: displayMessage,
        isEligible: isEligible,
        amount: finalAmount,
        status: isEligible ? "Eligible" : "Not Eligible"
      };
    }).filter((offer): offer is Offer => offer !== null);
  };

  const offers = mapOffers(apiData);

  return (
    <div className="min-h-screen bg-[#020617] p-4 md:p-10 font-sans text-slate-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-end justify-between mb-12 px-2">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-indigo-400" />
              <span className="text-indigo-400 font-bold text-[10px] uppercase tracking-[0.3em] block">Exclusive Deals</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white leading-tight">
              Personalized  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Loan Offers</span>
            </h1>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="group flex items-center gap-2 p-3 px-5 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-all shadow-xl"
          >
            <ArrowLeft size={18} className="text-slate-400 group-hover:text-indigo-400" />
            <span className="text-sm font-bold text-slate-300 group-hover:text-white">Back</span>
          </button>
        </div>

        {/* Offers List */}
        <div className="space-y-6">
          {offers.length > 0 ? (
            offers.map((offer, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={offer.name}
                className={`relative group bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-6 md:p-8 transition-all duration-300
                  ${offer.isEligible ? 'hover:border-indigo-500/50 hover:bg-slate-900/60' : 'opacity-60 grayscale-[0.8]'}`}
              >
                {/* Glow Effect for Eligible cards */}
                {offer.isEligible && (
                  <div className="absolute -inset-px bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-[2.5rem] opacity-0 group-hover:opacity-10 transition-opacity blur-lg" />
                )}

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  
                  {/* Bank Details */}
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110
                      ${offer.isEligible 
                        ? 'bg-gradient-to-br from-indigo-600 to-blue-700 text-white' 
                        : 'bg-slate-800 text-slate-500'}`}>
                      <Building2 size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight">{offer.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${offer.isEligible ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                          {offer.isEligible ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                          <span className="text-[10px] font-bold uppercase tracking-wider">{offer.message}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Limit & Info */}
                  <div className="flex gap-12 border-l border-slate-800 pl-8 hidden md:flex">
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Status</p>
                      <p className={`font-black text-sm ${offer.isEligible ? 'text-indigo-400' : 'text-slate-400'}`}>
                        {offer.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 text-right">Max Limit</p>
                      <p className="font-black text-xl text-white tracking-tighter">₹{offer.amount.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    disabled={!offer.isEligible}
                    onClick={() => handleApply(offer.name)}
                    className={`relative overflow-hidden px-10 py-5 rounded-[1.8rem] font-black text-[11px] uppercase tracking-[0.2em] transition-all flex items-center gap-2
                      ${offer.isEligible 
                        ? 'bg-white text-[#020617] hover:bg-indigo-400 hover:text-white shadow-lg active:scale-95' 
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
                  >
                    {offer.isEligible ? (
                      <>Apply Now <ExternalLink size={14} /></>
                    ) : (
                      'Not Eligible'
                    )}
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-24 bg-slate-900/20 rounded-[3rem] border border-slate-800/50 border-dashed shadow-2xl">
              <div className="animate-pulse flex flex-col items-center">
                <AlertCircle size={54} strokeWidth={1} className="text-slate-700 mb-4" />
                <h3 className="text-xl font-black text-slate-400">Fetching Best Rates...</h3>
                <p className="text-slate-600 mt-2 text-sm">Please do not refresh the page.</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center mt-12 text-slate-600 text-[9px] font-bold uppercase tracking-[0.4em]">
          End-to-End Encrypted • RBI Regulated Partners
        </p>
      </div>
    </div>
  );
};

export default OffersPage;