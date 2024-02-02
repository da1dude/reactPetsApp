const mongoose = require('mongoose')
const toySchema = require('./toy')

const petSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		adoptable: {
			type: Boolean,
			required: true,
			default: false,
		},
		toys: [toySchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
	},
	{
		timestamps: true,
		toObject: { virtuals: true},
		toJSON: { virtuals: true}
	}
)

// we define virtuals outside of the schema
// virtuals allow ys to derive additional data from already existing data on our documents
//when a docuemnt is retrieved from the database, the virtuals are included in the response

// first virtual "full title" this produces a string that includes the pet's name and type

petSchema.virtual('fullTitle').get(function () {
	return `${this.name} the ${this.type}`
})

// this second virtual will determine if the pet is a baby depending on its age

petSchema.virtual('isABaby').get(function () {
	if (this.age < 5) {
		return "Yeah, theyre just a baby"
	} else if (this.age >= 5 && this.age < 10) {
		return "Not really a baby but, still a baby"
	} else {
		return "They're all grown up"
	}
})	




module.exports = mongoose.model('Pet', petSchema)