import korlibs.image.color.*
import korlibs.korge.render.*
import korlibs.korge.scene.*
import korlibs.korge.view.*
import korlibs.math.geom.*
import korlibs.math.geom.abs
import kotlin.math.*

enum class PieceKind {
    WhitePawn,
    BlackPawn,
    WhiteRook,
    BlackRook,
    WhiteKnight,
    BlackKnight,
    WhiteBishop,
    BlackBishop,
    WhiteQueen,
    BlackQueen,
    WhiteKing,
    BlackKing
}

class Piece(
    var kind: PieceKind,
    private val color: RGBA,
    var cx: Int,
    var cy: Int,
    cont: SceneContainer,
) : View() {

    private var pieceKind: PieceKind = kind
    private lateinit var piece: Image

    init {
        if (color == Colors.WHITE) {
            // If the piece is white, set the piece image to the white pawn or rook or knight
            piece =
                Image(
                    when (kind) {
                        PieceKind.WhitePawn -> whitePawn!!
                        PieceKind.WhiteRook -> whiteRook!!
                        PieceKind.WhiteKnight -> whiteKnight!!
                        PieceKind.WhiteBishop -> whiteBishop!!
                        PieceKind.WhiteQueen -> whiteQueen!!
                        PieceKind.WhiteKing -> whiteKing!!
                        else -> throw Error("Invalid Piece !?")
                    })

            piece.size(Size(64, 64))
            piece.addTo(cont)
            objektBewegen(piece, cx, cy)
        } else {
            // If the piece is black, set the piece image to the black pawn or rook or knight
            if (color == Colors.BLACK) {
                piece =
                    Image(
                        when (kind) {
                            PieceKind.BlackPawn -> blackPawn!!
                            PieceKind.BlackRook -> blackRook!!
                            PieceKind.BlackKnight -> blackKnight!!
                            PieceKind.BlackBishop -> blackBishop!!
                            PieceKind.BlackQueen -> blackQueen!!
                            PieceKind.BlackKing -> blackKing!!
                            else -> throw Error("Invalid Piece !?")
                        })
                piece.size(Size(64, 64))
                piece.addTo(cont)
                objektBewegen(piece, cx, cy)
            }
        }
    }

    fun bw(newX: Int, newY: Int) {
        println("Figur bewegt nach: $newX, $newY")
        piece.pos = Point(newX * 64.0, newY * 64.0)
        piece.position(Point(newX * 64.0, newY * 64.0))
        println("figur.pos: ${piece.pos}")
    }

    /**
     * Moves the piece to a new position on the board.
     *
     * @param cx The new x-coordinate of the piece.
     * @param cy The new y-coordinate of the piece.
     */

    /**
     * Checks if the move of the piece is valid.
     *
     * @param oldPos The old position of the piece.
     * @param newPos The new position of the piece.
     * @return true if the move is valid, false otherwise.
     */
    fun moveChecker(oldPos: Pair<Int, Int>, newPos: Pair<Int, Int>, performMove:Boolean): Boolean {
        val pieceOnNewPos = schachbrett!!.findPiece(newPos.first, newPos.second)
        if (whiteTurn && performMove) {
            return when (pieceKind) {
                PieceKind.WhitePawn -> moveWhitePawn(oldPos, newPos, pieceOnNewPos, performMove)
                PieceKind.WhiteRook -> moveRook(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.WhiteKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.WhiteBishop -> moveBishop(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.WhiteQueen -> moveQueen(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.WhiteKing -> moveKing(oldPos, newPos, pieceOnNewPos, true, performMove)
                else -> false
            }
        }
        if (!whiteTurn && performMove) {
            return when (pieceKind) {
                PieceKind.BlackPawn -> moveBlackPawn(oldPos, newPos, pieceOnNewPos, performMove)
                PieceKind.BlackRook -> moveRook(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.BlackKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.BlackBishop -> moveBishop(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.BlackQueen -> moveQueen(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.BlackKing -> moveKing(oldPos, newPos, pieceOnNewPos, false, performMove)
                else -> false
            }
        }
        if (!performMove){
            return when (pieceKind){
                PieceKind.WhitePawn -> moveWhitePawn(oldPos, newPos, pieceOnNewPos, performMove)
                PieceKind.BlackPawn -> moveBlackPawn(oldPos, newPos, pieceOnNewPos, performMove)
                PieceKind.WhiteRook -> moveRook(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.BlackRook -> moveRook(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.WhiteKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.BlackKnight -> moveKnight(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.WhiteBishop -> moveBishop(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.BlackBishop -> moveBishop(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.WhiteQueen -> moveQueen(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.BlackQueen -> moveQueen(oldPos, newPos, pieceOnNewPos, false, performMove)
                PieceKind.WhiteKing -> moveKing(oldPos, newPos, pieceOnNewPos, true, performMove)
                PieceKind.BlackKing -> moveKing(oldPos, newPos, pieceOnNewPos, false, performMove)
            }
        }

        return false
    }

    private fun moveWhitePawn(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        performMove: Boolean
    ): Boolean {
        val isPawnMoveForward = newPos.second - oldPos.second == 1 && oldPos.first == newPos.first
        val isInitialPawnMove =
            oldPos.second == 1 && newPos.second == 3 && oldPos.first == newPos.first
        if (isPawnMoveForward || isInitialPawnMove) {
            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = false

                return true
            }
        } else if (oldPos.second - newPos.second == -1 &&
            ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == Colors.BLACK) {
                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = false

                return true
            }
        }
        return false
    }

    private fun moveBlackPawn(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        performMove: Boolean
    ): Boolean {
        val isPawnMoveForward = newPos.second - oldPos.second == -1 && oldPos.first == newPos.first
        val isInitialPawnMove =
            oldPos.second == 6 && newPos.second == 4 && oldPos.first == newPos.first
        if (isPawnMoveForward || isInitialPawnMove) {
            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = true

                return true
            }
        } else if (newPos.second - oldPos.second == -1 &&
            ((newPos.first - oldPos.first == 1) || (newPos.first - oldPos.first == -1))) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == Colors.WHITE) {

                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = true

                return true
            }
        }
        return false
    }

    private fun moveRook(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        isWhite: Boolean,
        performMove: Boolean
    ): Boolean {
        // Case moving up or down
        if (oldPos.first == newPos.first) {
            // going down
            if (newPos.second > oldPos.second) {
                val cellstocheck = newPos.second - oldPos.second - 1
                println("cellstocheck: $cellstocheck going down")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first, oldPos.second + i)?.pos
                    if (pp != null) {
                        println("Found Piece blocking rooks path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    return false
                }
                println("pieceOnNewPos: $pieceOnNewPos")
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one down
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                whiteTurn = !isWhite
                return true
            }
            if (newPos.second < oldPos.second) {
                val cellstocheck = oldPos.second - newPos.second - 1
                println("cellstocheck: $cellstocheck going up")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first, oldPos.second - i)?.pos
                    if (pp != null) {
                        println("Found Piece blocking rooks path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one down
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }

        // Case moving left or right
        if (oldPos.second == newPos.second) {
            // going right
            if (newPos.first > oldPos.first) {
                val cellstocheck = newPos.first - oldPos.first - 1
                println("cellstocheck: $cellstocheck going right")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first + i, oldPos.second)?.pos
                    if (pp != null) {
                        println("Found Piece blocking rooks path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }

                // Case moving one right
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
            if (newPos.first < oldPos.first) {
                val cellstocheck = oldPos.first - newPos.first - 1
                println("cellstocheck: $cellstocheck going left")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first - i, oldPos.second)?.pos
                    if (pp != null) {
                        println("Found Piece blocking rooks path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }

                // Case moving one left
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                whiteTurn = !isWhite
                return true
            }
        }

        return false
    }

    private fun moveKnight(
    oldPos: Pair<Int, Int>,
    newPos: Pair<Int, Int>,
    pieceOnNewPos: Piece?,
    isWhite: Boolean,
    performMove: Boolean
): Boolean {
    val xDiff = abs(newPos.first - oldPos.first)
    val yDiff = abs(newPos.second - oldPos.second)

    if ((xDiff == 2 && yDiff == 1) || (xDiff == 1 && yDiff == 2)) {
        if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
            return false
        }
        if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
            if (performMove) {
                removePiece(pieceOnNewPos)
                whiteTurn = !isWhite
            }
            return true
        }
        if (pieceOnNewPos == null) {
            if (performMove) {
                whiteTurn = !isWhite
            }
            return true
        }
    }
    return false
}

    private fun moveBishop(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        isWhite: Boolean,
        performMove: Boolean
    ): Boolean {
        val realMove =
            ((newPos.first - oldPos.first) == (newPos.second - oldPos.second)) ||
                ((oldPos.first - newPos.first) == (oldPos.second - newPos.first)) ||
                ((newPos.first - oldPos.first) == (oldPos.second - newPos.first)) ||
                ((oldPos.first - newPos.first) == (newPos.second - oldPos.second))
        if (realMove) {
            if (newPos.first > oldPos.first && newPos.second > oldPos.second) {
                val cellstocheck = newPos.first - oldPos.first - 1
                println("cellstocheck: $cellstocheck going down right")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first + i, oldPos.second + i)?.pos
                    if (pp != null) {
                        println("Found Piece blocking bishops path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one down right
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
            if (newPos.first < oldPos.first && newPos.second < oldPos.second) {
                val cellstocheck = oldPos.first - newPos.first - 1
                println("cellstocheck: $cellstocheck going up left")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first - i, oldPos.second - i)?.pos
                    if (pp != null) {
                        println("Found Piece blocking bishops path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one up left
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
            if (newPos.first > oldPos.first && newPos.second < oldPos.second) {
                val cellstocheck = newPos.first - oldPos.first - 1
                println("cellstocheck: $cellstocheck going up right")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first + i, oldPos.second - i)?.pos
                    if (pp != null) {
                        println("Found Piece blocking bishops path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one up right
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
            if (newPos.first < oldPos.first && newPos.second > oldPos.second) {
                val cellstocheck = oldPos.first - newPos.first - 1
                println("cellstocheck: $cellstocheck going down left")
                for (i in 1..cellstocheck) {
                    val pp = schachbrett!!.findPiece(oldPos.first - i, oldPos.second + i)?.pos
                    if (pp != null) {
                        println("Found Piece blocking bishops path!")
                        return false
                    }
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    return false
                }
                if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                    println("pieceOnNewPos: $pieceOnNewPos")
                    if (performMove) removePiece(pieceOnNewPos)
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                // Case moving one down left
                if (pieceOnNewPos == null && cellstocheck == 0) {
                    if (performMove) whiteTurn = !isWhite
                    return true
                }
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }
        return false
    }

    private fun moveQueen(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        isWhite: Boolean,
        performMove: Boolean
    ): Boolean {
        return moveRook(oldPos, newPos, pieceOnNewPos, isWhite, performMove) ||
            moveBishop(oldPos, newPos, pieceOnNewPos, isWhite, performMove)
    }

    private fun moveKing(
        oldPos: Pair<Int, Int>,
        newPos: Pair<Int, Int>,
        pieceOnNewPos: Piece?,
        isWhite: Boolean,
        performMove: Boolean
    ): Boolean {
        // Case moving down
        if (oldPos.first == newPos.first && newPos.second - oldPos.second == 1) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                return false
            }
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = !isWhite
                return true
            }
            // Case moving one down
            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }
        // Case moving up
        else if (oldPos.first == newPos.first && newPos.second - oldPos.second == -1) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                return false
            }
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = !isWhite
                return true
            }
            // Case moving one up
            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }
        // Case moving left
        else if (oldPos.second == newPos.second && oldPos.first - newPos.first == 1) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                return false
            }
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = !isWhite
                return true
            }
            // Case moving one left
            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }
        // Case moving right
        else if (oldPos.second == newPos.second && newPos.first - oldPos.first == 1) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                return false
            }
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = !isWhite
                return true
            }
            // Case moving one right
            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }
        // Case moving down right
        else if (newPos.first - oldPos.first == 1 && newPos.second - oldPos.second == 1) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                return false
            }
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = !isWhite
                return true
            }
            // Case moving one down right
            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }
        // Case moving down left
        else if (oldPos.first - newPos.first == 1 && newPos.second - oldPos.second == 1) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                return false
            }
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = !isWhite
                return true
            }
            // Case moving one down left
            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }
        // Case moving up right
        else if (newPos.first - oldPos.first == 1 && oldPos.second - newPos.second == 1) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                return false
            }
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = !isWhite
                return true
            }
            // Case moving one up right
            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }
        // Case moving up left
        else if (oldPos.first - newPos.first == 1 && oldPos.second - newPos.second == 1) {
            if (pieceOnNewPos != null && pieceOnNewPos.color == color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                return false
            }
            if (pieceOnNewPos != null && pieceOnNewPos.color != color) {
                println("pieceOnNewPos: $pieceOnNewPos")
                if (performMove) removePiece(pieceOnNewPos)
                if (performMove) whiteTurn = !isWhite
                return true
            }
            // Case moving one up left
            if (pieceOnNewPos == null) {
                if (performMove) whiteTurn = !isWhite
                return true
            }
        }

        return false
    }

    private fun removePiece(piece: Piece) {
        println("Pieces list before removal: $pieces")
        pieces.remove(piece)
        piece.piece.removeFromParent()
        piece.removeFromParent()

        println("Pieces list after removal: $pieces")
        println("Piece removed: $piece")
    }

    override fun renderInternal(ctx: RenderContext) {}
}

fun addAllPieces(cont: SceneContainer) {
    // White pieces
    val whitePawn1 = Piece(PieceKind.WhitePawn, Colors.WHITE, 0, 1, cont)
    val whitePawn2 = Piece(PieceKind.WhitePawn, Colors.WHITE, 1, 1, cont)
    val whitePawn3 = Piece(PieceKind.WhitePawn, Colors.WHITE, 2, 1, cont)
    val whitePawn4 = Piece(PieceKind.WhitePawn, Colors.WHITE, 3, 1, cont)
    val whitePawn5 = Piece(PieceKind.WhitePawn, Colors.WHITE, 4, 1, cont)
    val whitePawn6 = Piece(PieceKind.WhitePawn, Colors.WHITE, 5, 1, cont)
    val whitePawn7 = Piece(PieceKind.WhitePawn, Colors.WHITE, 6, 1, cont)
    val whitePawn8 = Piece(PieceKind.WhitePawn, Colors.WHITE, 7, 1, cont)
    val whiteRook1 = Piece(PieceKind.WhiteRook, Colors.WHITE, 0, 0, cont)
    val whiteRook2 = Piece(PieceKind.WhiteRook, Colors.WHITE, 7, 0, cont)
    val whiteKnight1 = Piece(PieceKind.WhiteKnight, Colors.WHITE, 1, 0, cont)
    val whiteKnight2 = Piece(PieceKind.WhiteKnight, Colors.WHITE, 6, 0, cont)
    val whiteBishop1 = Piece(PieceKind.WhiteBishop, Colors.WHITE, 2, 0, cont)
    val whiteBishop2 = Piece(PieceKind.WhiteBishop, Colors.WHITE, 5, 0, cont)
    val whiteQueen = Piece(PieceKind.WhiteQueen, Colors.WHITE, 3, 0, cont)
    val whiteKing = Piece(PieceKind.WhiteKing, Colors.WHITE, 4, 0, cont)

    // black pieces
    val blackPawn1 = Piece(PieceKind.BlackPawn, Colors.BLACK, 0, 6, cont)
    val blackPawn2 = Piece(PieceKind.BlackPawn, Colors.BLACK, 1, 6, cont)
    val blackPawn3 = Piece(PieceKind.BlackPawn, Colors.BLACK, 2, 6, cont)
    val blackPawn4 = Piece(PieceKind.BlackPawn, Colors.BLACK, 3, 6, cont)
    val blackPawn5 = Piece(PieceKind.BlackPawn, Colors.BLACK, 4, 6, cont)
    val blackPawn6 = Piece(PieceKind.BlackPawn, Colors.BLACK, 5, 6, cont)
    val blackPawn7 = Piece(PieceKind.BlackPawn, Colors.BLACK, 6, 6, cont)
    val blackPawn8 = Piece(PieceKind.BlackPawn, Colors.BLACK, 7, 6, cont)
    val blackRook1 = Piece(PieceKind.BlackRook, Colors.BLACK, 0, 7, cont)
    val blackRook2 = Piece(PieceKind.BlackRook, Colors.BLACK, 7, 7, cont)
    val blackKnight1 = Piece(PieceKind.BlackKnight, Colors.BLACK, 1, 7, cont)
    val blackKnight2 = Piece(PieceKind.BlackKnight, Colors.BLACK, 6, 7, cont)
    val blackBishop1 = Piece(PieceKind.BlackBishop, Colors.BLACK, 2, 7, cont)
    val blackBishop2 = Piece(PieceKind.BlackBishop, Colors.BLACK, 5, 7, cont)
    val blackQueen = Piece(PieceKind.BlackQueen, Colors.BLACK, 3, 7, cont)
    val blackKing = Piece(PieceKind.BlackKing, Colors.BLACK, 4, 7, cont)

    // Add all pieces to the pieces list
    pieces.add(whitePawn1)
    pieces.add(whitePawn2)
    pieces.add(whitePawn3)
    pieces.add(whitePawn4)
    pieces.add(whitePawn5)
    pieces.add(whitePawn6)
    pieces.add(whitePawn7)
    pieces.add(whitePawn8)
    pieces.add(whiteRook1)
    pieces.add(whiteRook2)
    pieces.add(blackPawn1)
    pieces.add(blackPawn2)
    pieces.add(blackPawn3)
    pieces.add(blackPawn4)
    pieces.add(blackPawn5)
    pieces.add(blackPawn6)
    pieces.add(blackPawn7)
    pieces.add(blackPawn8)
    pieces.add(blackRook1)
    pieces.add(blackRook2)
    pieces.add(whiteKnight1)
    pieces.add(whiteKnight2)
    pieces.add(blackKnight1)
    pieces.add(blackKnight2)
    pieces.add(whiteBishop1)
    pieces.add(whiteBishop2)
    pieces.add(blackBishop1)
    pieces.add(blackBishop2)
    pieces.add(whiteQueen)
    pieces.add(blackQueen)
    pieces.add(whiteKing)
    pieces.add(blackKing)
}
