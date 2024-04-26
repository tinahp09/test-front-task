import Api from '~/api/api'



export class userApi extends Api {
    public async getUserData(data:any){
        return await this.post(
          `https://site.eskantehran.ir/api/eAdminfinduser`,
          data
        )
      }
    
}
