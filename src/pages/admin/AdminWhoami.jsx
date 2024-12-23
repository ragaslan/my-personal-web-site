import React from 'react'

function AdminWhoami() {

  const whoami_data = "Merhaba, ben Ramazan. Yıldız Teknik Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Web geliştirme, robotik ve yapay zeka alanında araştırmalar ve çalışmalar yapıyorum. İlgimi çeken konuları derinlemesine öğrenmeyi seviyorum ve bu alanda Türkçe kaynaklar üretmeye çalışıyorum."
  return (
    <form className='flex flex-col items-start'> 
        <textarea className='border-2 border-gray-600 p-2 resize-none w-full min-h-[300px]' name="whoami" id="whoami" value={whoami_data}></textarea>
        <input className='p-2 bg-blue-400 text-white flex text-center mt-2 cursor-pointer rounded' type="text" value={"Save"} />
    </form>
  )
}

export default AdminWhoami