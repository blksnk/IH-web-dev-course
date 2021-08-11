# HTML Basics

## Sommaire

- [HTML Basics](#html-basics)
	- [Sommaire](#sommaire)
	- [Introduction](#introduction)
	- [HTML, c'est quoi ?](#html-cest-quoi-)
	- [Les nodes et le DOM Tree](#les-nodes-et-le-dom-tree)
	- [Les tags](#les-tags)
		- [Principe](#principe)
		- [Liste des tags](#liste-des-tags)
		- [Self closing tags](#self-closing-tags)
		- [Les attributs](#les-attributs)
	- [Imbrication](#imbrication)
		- [Grouper des éléments](#grouper-des-éléments)
		- [Indentation](#indentation)
- [Bravo!](#bravo)


## Introduction

Une page web est composée de trois éléments distincts, qui ensemble forment une expérience compréhensible, esthétique et intéractive. Nous utiliserons l'analogie du corps humain pour mieux comprendre ces éléments et leurs fonctions respective.

- **HTML** : Le squelette, il dicte le contenu et la structure de la page web.

- **CSS** : La peau, elle donne forme au contenu, en lui donnant de la couleur et une consistence.

- **Javascript** : Les muscles, ils permettent à la page de bouger, d'être intéractive.

Nous allons aujourd'hui nous pencher sur HTML

## HTML, c'est quoi ?

HTML est le squelette d'une page web. Le fichier HTML discte le contenu de la page, et regroupe donc les titres, le texte et les médias (images, audio, video, etc..).

Il est composé de plusieurs os, *appelés **nodes***, reliés entre eux.

## Les nodes et le DOM Tree

Un fichier HTML est composé de plusieurs éléments, appelés **nodes**. Chaque élément (titres, paragraphes, images, etc...) quel qu'il soit est une node.

Chaque node peut contenir d'autres nodes, appelés **enfants**, et être elle-même contenue dans une autre, qui sera alors son **parent**

Le contenu d'une page web prend une structure similaire aux branches d'un arbre.

*On appelle cette structure le **DOM Tree**.*

![Dom tree](https://www.codeguage.com/Images/js/tree.png)

## Les tags

### Principe

Un document HTML est composé d'une suite de **tags**, utilisés pour décrire différents contenus spécifiques, tels que des images, du texte, des titres ou des liens.

La plupart des tags vont par paire. Le premier - *opening tag* - ouvre l'élement, tandis que le deuxième - *closing tag* - vient le fermer. C'est entre ces deux tags que l'on vient ajouter le contenu.

![paragraph tag](https://clearlydecoded.com/assets/images/posts/2017-09-04-anatomy-of-html-tag/simple-p-tag.png)

Ainsi, pour placer un paragraphe dans un fichier HTML, on doit d'abord ouvrir avec le tag **`<p>`**, puis rajouter notre texte, puis fermer le tout avec le tag **`</p>`**.

En pratique, le code ressemble à ceci:

```
<p>Le contenu de mon super paragraphe</p>
```

*Pour une explication plus poussée des tags, vous pouvez consulter [ce lien](https://clearlydecoded.com/anatomy-of-html-tag), en Anglais.*


### Liste des tags

Le langage HTML comporte une multitude de tags, chacun avec son utilité. Voici les plus courants, que nous serons amenés à employer:

| Tag  | Description | Exemple | Rendu |
| :--- | :---        | :---    | :---  | 
| `<h1>` | Titre 1 | `<h1>Je suis le plus grand titre</h1>` | <h1>Je suis le plus grand titre</h1> |
| `<h2>` | Titre 2 | `<h2>Je suis un peu plus petit</h2>` | <h2>Je suis un peu plus petit</h2> |
| `<h3>` | Titre 3 | `<h3>Je suis encore plus petit</h3>` | <h3>Je suis encore plus petit</h3> |
| `<h4>` | Titre 4 | `<h4>Je suis toujours plus petit</h4>` | <h4>Je suis toujours plus petit</h4> |
| `<h5>` | Titre 5 | `<h5>Je suis un peu plus petit</h5>` | <h5>Je suis un peu plus petit</h5> |
| `<h6>` | Titre 6 | `<h6>Je suis le plus petit</h6>` | <h6>Je suis le plus petit</h6> |
| `<p>` | Paragraphe | `<p>Je suis un paragraphe</p>` | <p>Je suis un paragraphe</p> |
| `<a>` | Lien | `<a>Je suis un lien</a>` | <a>Je suis un lien</a>
| `<button>` | Bouton | `<button>Je suis un bouton</button>` | <button>Je suis un bouton</button> |
| `<em>` | Emphase | `<em>Je suis un texte en italique</em>` | <em>Je suis un texte en italique</em> |
| `<strong>` | Gras | `<strong>Je suis un texte en gras</strong>` | <strong>Je suis un texte en gras</strong> |
| `<q>` | Citation | `<q>Je suis une citation</q>` | <q>Je suis une citation</q> |

### Self closing tags

Certains tags ne nécessitent pas d'être fermés, et ne vont donc pas par paire. On les appelle les **Self closing tags**.

On compte parmis ces derniers les tags `<img/>`, `<video/>` et `<input/>`, respectivements utilisés pour afficher des images, des vidéos et des entrées de texte.

Ainsi, pour ajouter une entrée de texte à notre page, on écrira:

```
<input type="text" />
```

*Notez que la notation `<input></input>` est aussi valable, mais moins lisible.*

### Les attributs

Certains tags ne se suffisent pas à eux-mêmes, et ont besoin d'informations supplémentaires afin de fonctionner correctement. Les **attributs** permettent de renseigner ces informations.

![attributs](https://clearlydecoded.com/assets/images/posts/2017-09-04-anatomy-of-html-tag/html-tag-attributes.png)

Prenons un exemple concret: on veut placer une image dans notre page web. Pour cela, nous sommes contraints de renseigner le lien vers cette image.
On rajoutera alors deux attributs à l'image afin de spécifier sa **source** et lui donner un **nom** au cas où elle ne chargerait pas.

```
<img src="https://i.pinimg.com/originals/9e/e2/b4/9ee2b4b4b2df0b00773f83923bcf3bad.jpg" alt="panda qui tombe"/>
```
devient:

![panda qui tombe](https://i.pinimg.com/originals/9e/e2/b4/9ee2b4b4b2df0b00773f83923bcf3bad.jpg)

## Imbrication

### Grouper des éléments

Nous l'avons vu plus haut, une page HTML est composée de parents et d'enfants.

En pratique, **un tag peut en contenir d'autres**, on peut donc grouper plusieurs éléments ensemble. Ainsi, afin de donner un sous-titre à notre image de panda, nous écrirons:

```
<figure>
	<img src="https://i.pinimg.com/originals/9e/e2/b4/9ee2b4b4b2df0b00773f83923bcf3bad.jpg" alt="panda qui tombe"/>
	<figcaption>Panda qui tombe</figcaption>
</figure>
```
ce qui donne:

![panda qui tombe](https://i.pinimg.com/originals/9e/e2/b4/9ee2b4b4b2df0b00773f83923bcf3bad.jpg)

*Panda qui tombe*

### Indentation

Indenter son code revient à en déplacer des morceaux vers la droite afin de les séparer visuellement du reste et ainsi d'illustrer la hiérarchie de ces derniers.

Pour ce faire, on utilise généralement la touche **`Tab`**  située à gauche du clavier, au dessus de la touche `Verr. Maj`.

> Imbriquer et indenter le contenu de notre page web augmente sa lisibilité et son accessibilité.

En règle générale, **plus un élément est situé profondément dans DOM Tree, plus il sera indenté**.

```
<body>
	<header>
		<nav>
			<img src="logo" alt="logo"/>
			<strong>
				Nom du site
			</strong>
		</nav>
	</header>

	<main>
		<h1>Titre de la page</h1>

		<section>
			<img src="..." alt="nom de l'image">
			<p>
				Lorem ipsum dolor sit et.
			</p>
		<section>
	</main>

	<footer>
		<p>Crédits</p>
	</footer>
</body>
```

*Ici, on peut facilement voire la séparation entre nos différents élements et leur contenu.*

# Bravo!

Félicitations, vous êtes arrivé à bout de cette leçon. 
Maintenant, place à la pratique !
