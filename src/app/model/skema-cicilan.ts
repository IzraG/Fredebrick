

export class SkemaCicilan {
  NTF:number= 0;
  SukuBunga: number= 0;
  Tenor: number= 0;
  PresentValue: number= 0;
  ListAngsuran: Array<Angsuran> = new Array<Angsuran>();
}
export class Angsuran {
  InstallmentAmount: number = 0;
  Pokok: number = 0;
  SisaPokok: number =0;
  Bunga: number = 0 ;
}
export function calculate_installmentFixedRegular(Harga: number, DP: number, Bunga:number, sisaGaji: number){
  console.log(Bunga)
  let jumlahcicilan: number = 0;
  let jumlahangsuran: number = 0;
  let ir:number = Bunga/12/100;
  let pv:number = -(Harga-DP);
  let fv: number = 0;
  let type:number = 0;

  do{
    {
      jumlahcicilan= jumlahcicilan+6;
      jumlahangsuran = PMT(ir,jumlahcicilan,pv,fv,type);

    }
  }while(jumlahangsuran > sisaGaji)
  let returnCicilan: SkemaCicilan= new SkemaCicilan();
  returnCicilan.NTF = -1*(pv);
  returnCicilan.SukuBunga = ir;
  returnCicilan.Tenor = jumlahcicilan;
  returnCicilan.PresentValue = pv;

  for(let num = 0; num<jumlahcicilan ;num++){

    returnCicilan.ListAngsuran[num] = new Angsuran();
    returnCicilan.ListAngsuran[num].InstallmentAmount = jumlahangsuran;

    if(num == 0){
      returnCicilan.ListAngsuran[num].Bunga = ir*returnCicilan.NTF;
    }else{
      returnCicilan.ListAngsuran[num].Bunga = (ir * returnCicilan.ListAngsuran[(num-1)].SisaPokok);

    }
    returnCicilan.ListAngsuran[num].Pokok = returnCicilan.ListAngsuran[num].InstallmentAmount - returnCicilan.ListAngsuran[num].Bunga

    if(num==0){
      returnCicilan.ListAngsuran[num].SisaPokok = returnCicilan.NTF - returnCicilan.ListAngsuran[num].Pokok;
    }
    else{
      returnCicilan.ListAngsuran[num].SisaPokok = returnCicilan.ListAngsuran[num-1].SisaPokok - returnCicilan.ListAngsuran[num].Pokok;
    }

  }
  return returnCicilan;
}




export function PMT(ir:number, np:number, pv:number, fv:number, type:number) {
  /*
   * ir   - interest rate per month
   * np   - number of periods (months)
   * pv   - present value
   * fv   - future value
   * type - when the payments are due:
   *        0: end of the period, e.g. end of month (default)
   *        1: beginning of period
   */
  var pmt, pvif;

  fv || (fv = 0);
  type || (type = 0);

  if (ir === 0)
      return -(pv + fv)/np;

  pvif = Math.pow(1 + ir, np);
  pmt = - ir * (pv * pvif + fv) / (pvif - 1);

  if (type === 1)
      pmt /= (1 + ir);

  return pmt;
}
