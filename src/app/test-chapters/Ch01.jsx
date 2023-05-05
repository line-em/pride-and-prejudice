// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css"; // optional

import Definition from "../../components/Definition";

function Chapone() {
	return (
		<article>
			<header>
				<h1 id="chapter">Chapter 1</h1>
			</header>
			<p>
				It is a truth universally acknowledged, that a single man in possession of
				a good fortune, must be in want of a wife.
			</p>
			<p>
				However little known the feelings or views of such a man may be on his
				first entering a neighbourhood, this truth is so well fixed in the minds
				of the surrounding families, that he is considered the rightful property
				of some one or other of their daughters.
			</p>
			<p>
				“My dear Mr. Bennet,” said his lady to him one day, “have you heard that
				Netherfield Park is let at last?”
			</p>
			<p>Mr. Bennet replied that he had not.</p>
			<p>
				“But it is,” returned she; “for Mrs. Long has just been here, and she told
				me all about it.”
			</p>
			<p>Mr. Bennet made no answer.</p>
			<p>“Do you not want to know who has taken it?” cried his wife impatiently.</p>
			<p>
				“<i>You</i> want to tell me, and I have no objection to hearing it.”
			</p>
			<p>This was invitation enough.</p>
			<p>
				“Why, my dear, you must know, Mrs. Long says that Netherfield is taken by
				a young man of large fortune from the north of England; that he came down
				on Monday in a{" "}
				<Definition
					text={
						"a horse-drawn carriage for one or two people, typically one with an open top and two wheels."
					}
				>
					chaise
				</Definition>{" "}
				and four to see the place, and was so much delighted with it, that he
				agreed with Mr. Morris immediately; that he is to take possession before{" "}
				<Definition text="the feat of the archangel Michael, a church festival, celebrated on the 29th of September. Hence, colloquially, autumn.">
					Michaelmas,
				</Definition>{" "}
				and some of his servants are to be in the house by the end of next week.”
			</p>
			<p>“What is his name?”</p>
			<p>“Bingley.”</p>
			<p>“Is he married or single?”</p>
			<p>
				“Oh! Single, my dear, to be sure! A single man of large fortune; four or
				five thousand a year. What a fine thing for our girls!”
			</p>
			<p>“How so? How can it affect them?”</p>
			<p>
				“My dear Mr. Bennet,” replied his wife, “how can you be so tiresome! You
				must know that I am thinking of his marrying one of them.”
			</p>
			<p>“Is that his design in settling here?”</p>
			<p>
				“Design! Nonsense, how can you talk so! But it is very likely that he{" "}
				<i>may</i> fall in love with one of them, and therefore you must visit him
				as soon as he comes.”
			</p>
			<p>
				“I see no occasion for that. You and the girls may go, or you may send
				them by themselves, which perhaps will be still better, for as you are as
				handsome as any of them, Mr. Bingley may like you the best of the party.”
			</p>
			<p>
				“My dear, you flatter me. I certainly <i>have</i> had my share of beauty,
				but I do not pretend to be anything extraordinary now. When a woman has
				five grown-up daughters, she ought to give over thinking of her own
				beauty.”
			</p>
			<p>“In such cases, a woman has not often much beauty to think of.”</p>
			<p>
				“But, my dear, you must indeed go and see Mr. Bingley when he comes into
				the neighbourhood.”
			</p>
			<p>“It is more than I engage for, I assure you.”</p>
			<p>
				“But consider your daughters. Only think what an establishment it would be
				for one of them. Sir William and Lady Lucas are determined to go, merely
				on that account, for in general, you know, they visit no newcomers. Indeed
				you must go, for it will be impossible for <i>us</i> to visit him if you
				do not.”
			</p>
			<p>
				“You are over-scrupulous, surely. I dare say Mr. Bingley will be very glad
				to see you; and I will send a few lines by you to assure him of my hearty
				consent to his marrying whichever he chooses of the girls; though I must
				throw in a good word for my little Lizzy.”
			</p>
			<p>
				“I desire you will do no such thing. Lizzy is not a bit better than the
				others; and I am sure she is not half so handsome as Jane, nor half so
				good-humoured as Lydia. But you are always giving <i>her</i> the
				preference.”
			</p>
			<p>
				“They have none of them much to recommend them,” replied he; “they are all
				silly and ignorant like other girls; but Lizzy has something more of
				quickness than her sisters.”
			</p>
			<p>
				“Mr. Bennet, how <i>can</i> you abuse your own children in such a way? You
				take delight in vexing me. You have no compassion for my poor nerves.”
			</p>
			<p>
				“You mistake me, my dear. I have a high respect for your nerves. They are
				my old friends. I have heard you mention them with consideration these
				last twenty years at least.”
			</p>
			<p>“Ah, you do not know what I suffer.”</p>
			<p>
				“But I hope you will get over it, and live to see many young men of four
				thousand a year come into the neighbourhood.”
			</p>
			<p>
				“It will be no use to us, if twenty such should come, since you will not
				visit them.”
			</p>
			<p>
				“Depend upon it, my dear, that when there are twenty, I will visit them
				all.”
			</p>
			<p>
				Mr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve,
				and{" "}
				<Definition text="a sudden and unaccountable change of mood or behaviour.">
					caprice
				</Definition>{" "}
				that the experience of three-and-twenty years had been insufficient to
				make his wife understand his character. <i>Her</i> mind was less difficult
				to develop. She was a woman of mean understanding, little information, and
				uncertain temper. When she was discontented, she fancied herself nervous.
				The business of her life was to get her daughters married; its solace was
				visiting and news.
			</p>
		</article>
	);
}

export default Chapone;
