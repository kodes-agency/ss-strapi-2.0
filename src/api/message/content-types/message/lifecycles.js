module.exports = {
	async afterCreate(event){
		const { result } = event
		
		try{
			await strapi.plugins['email'].services.email.send({
				to: 'genowski@santa-sarah.com',
				from: 'genowski@santa-sarah.com',
				subject: 'Ново B2B запитване',
				html: `Пристигна ново запитване. <br> От: ${result.contactPerson} <br> Компания: ${result.companyName} <br> Телефон: ${result.phoneNumber} <br> Имейл: ${result.email} <br> Предмет на дейност: ${result.businessActivity} <br> Интерес към: ${result.interests}  <br>  Познавате ли вината на Санта Сара: ${result.knowledge} <br> Предлагате ли вината на Санта Сара: ${result.currentOffering} <br>  `
			})
		} catch(err){
			console.log(err)
		}
	}
}
