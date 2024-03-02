(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './korge-root-korge-foundation.js', './korge-root-korlibs-crypto.js', './kotlinx-coroutines-core.js', './korge-root-korlibs-time.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./korge-root-korge-foundation.js'), require('./korge-root-korlibs-crypto.js'), require('./kotlinx-coroutines-core.js'), require('./korge-root-korlibs-time.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'korge-root-korge-core'.");
    }
    if (typeof this['korge-root-korge-foundation'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-core'. Its dependency 'korge-root-korge-foundation' was not found. Please, check whether 'korge-root-korge-foundation' is loaded prior to 'korge-root-korge-core'.");
    }
    if (typeof this['korge-root-korlibs-crypto'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-core'. Its dependency 'korge-root-korlibs-crypto' was not found. Please, check whether 'korge-root-korlibs-crypto' is loaded prior to 'korge-root-korge-core'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korge-root-korge-core'.");
    }
    if (typeof this['korge-root-korlibs-time'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-core'. Its dependency 'korge-root-korlibs-time' was not found. Please, check whether 'korge-root-korlibs-time' is loaded prior to 'korge-root-korge-core'.");
    }
    root['korge-root-korge-core'] = factory(typeof this['korge-root-korge-core'] === 'undefined' ? {} : this['korge-root-korge-core'], this['kotlin-kotlin-stdlib'], this['korge-root-korge-foundation'], this['korge-root-korlibs-crypto'], this['kotlinx-coroutines-core'], this['korge-root-korlibs-time']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_soywiz_korge_korge_foundation, kotlin_com_soywiz_korge_korlibs_crypto, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_soywiz_korge_korlibs_time) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.s8;
  var objectMeta = kotlin_kotlin.$_$.r8;
  var setMetadataFor = kotlin_kotlin.$_$.t8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var addAll = kotlin_kotlin.$_$.p3;
  var Unit_instance = kotlin_kotlin.$_$.c3;
  var toSet = kotlin_kotlin.$_$.i6;
  var ensureNotNull = kotlin_kotlin.$_$.dc;
  var addAll_0 = kotlin_kotlin.$_$.o3;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.d;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var THROW_CCE = kotlin_kotlin.$_$.wb;
  var isCharSequence = kotlin_kotlin.$_$.f8;
  var trim = kotlin_kotlin.$_$.ib;
  var toString = kotlin_kotlin.$_$.x8;
  var sorted = kotlin_kotlin.$_$.x5;
  var KProperty0 = kotlin_kotlin.$_$.r9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.y7;
  var lazy = kotlin_kotlin.$_$.ic;
  var hashCode = kotlin_kotlin.$_$.a8;
  var equals = kotlin_kotlin.$_$.t7;
  var toList = kotlin_kotlin.$_$.a6;
  var Companion_instance = kotlin_com_soywiz_korge_korge_foundation.$_$.y1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var setExtra = kotlin_com_soywiz_korge_korge_foundation.$_$.x3;
  var hasExtra = kotlin_com_soywiz_korge_korge_foundation.$_$.u3;
  var Mixin = kotlin_com_soywiz_korge_korge_foundation.$_$.x2;
  var RectangleI = kotlin_com_soywiz_korge_korge_foundation.$_$.o4;
  var SizeInt = kotlin_com_soywiz_korge_korge_foundation.$_$.r4;
  var Companion_instance_0 = kotlin_com_soywiz_korge_korge_foundation.$_$.j2;
  var NotImplementedError = kotlin_kotlin.$_$.tb;
  var clamp = kotlin_com_soywiz_korge_korge_foundation.$_$.h5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.jc;
  var _SliceOrientation___get_flipX__impl__lgb7bx = kotlin_com_soywiz_korge_korge_foundation.$_$.b1;
  var _SliceOrientation___get_rotation__impl__m65r0o = kotlin_com_soywiz_korge_korge_foundation.$_$.d1;
  var IntArray2 = kotlin_com_soywiz_korge_korge_foundation.$_$.f3;
  var Companion_instance_1 = kotlin_com_soywiz_korge_korge_foundation.$_$.t1;
  var isIntArray = kotlin_kotlin.$_$.i8;
  var KMutableProperty1 = kotlin_kotlin.$_$.q9;
  var KProperty1 = kotlin_kotlin.$_$.s9;
  var Property = kotlin_com_soywiz_korge_korge_foundation.$_$.z2;
  var fill = kotlin_kotlin.$_$.n4;
  var CoroutineImpl = kotlin_kotlin.$_$.g7;
  var SequenceScope = kotlin_kotlin.$_$.t9;
  var until = kotlin_kotlin.$_$.n9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.q6;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var arraycopy = kotlin_com_soywiz_korge_korge_foundation.$_$.j6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.z;
  var iterator = kotlin_kotlin.$_$.u9;
  var Iterable = kotlin_kotlin.$_$.h3;
  var Companion_getInstance = kotlin_com_soywiz_korge_korge_foundation.$_$.a2;
  var Companion_getInstance_0 = kotlin_com_soywiz_korge_korge_foundation.$_$.f2;
  var RectSlice = kotlin_com_soywiz_korge_korge_foundation.$_$.i4;
  var _SliceOrientation___get_isRotatedDeg90CwOrCcw__impl__98v1vq = kotlin_com_soywiz_korge_korge_foundation.$_$.c1;
  var interfaceMeta = kotlin_kotlin.$_$.c8;
  var getNumberHashCode = kotlin_kotlin.$_$.x7;
  var to = kotlin_kotlin.$_$.oc;
  var mapOf = kotlin_kotlin.$_$.i5;
  var removePrefix = kotlin_kotlin.$_$.ja;
  var removeSuffix = kotlin_kotlin.$_$.ka;
  var split = kotlin_kotlin.$_$.pa;
  var get_lastIndex = kotlin_kotlin.$_$.z4;
  var toIntOrNull = kotlin_kotlin.$_$.za;
  var toDoubleOrNull = kotlin_kotlin.$_$.xa;
  var numberToInt = kotlin_kotlin.$_$.o8;
  var startsWith = kotlin_kotlin.$_$.qa;
  var setOf = kotlin_kotlin.$_$.u5;
  var toInt = kotlin_kotlin.$_$.bb;
  var printStackTrace = kotlin_kotlin.$_$.kc;
  var clampUByte = kotlin_com_soywiz_korge_korge_foundation.$_$.f5;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var appendHexByte = kotlin_com_soywiz_korge_korlibs_crypto.$_$.a;
  var compareTo = kotlin_kotlin.$_$.s7;
  var Comparable = kotlin_kotlin.$_$.nb;
  var insert = kotlin_com_soywiz_korge_korge_foundation.$_$.q7;
  var Companion_getInstance_1 = kotlin_com_soywiz_korge_korge_foundation.$_$.i2;
  var niceStr = kotlin_com_soywiz_korge_korge_foundation.$_$.d8;
  var numberToChar = kotlin_kotlin.$_$.m8;
  var toString_0 = kotlin_kotlin.$_$.l2;
  var roundToInt = kotlin_kotlin.$_$.a9;
  var getBooleanHashCode = kotlin_kotlin.$_$.w7;
  var getStringHashCode = kotlin_kotlin.$_$.z7;
  var Exception = kotlin_kotlin.$_$.rb;
  var toList_0 = kotlin_kotlin.$_$.b6;
  var get_hex = kotlin_com_soywiz_korge_korlibs_crypto.$_$.c;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var minus = kotlin_kotlin.$_$.l5;
  var CancellationException = kotlin_kotlin.$_$.p6;
  var toMutableSet = kotlin_kotlin.$_$.h6;
  var setOf_0 = kotlin_kotlin.$_$.t5;
  var NonRecursiveLock = kotlin_com_soywiz_korge_korge_foundation.$_$.v2;
  var plus = kotlin_kotlin.$_$.m5;
  var toMap = kotlin_kotlin.$_$.c6;
  var listOf = kotlin_kotlin.$_$.g5;
  var listOf_0 = kotlin_kotlin.$_$.f5;
  var Level_INFO_getInstance = kotlin_com_soywiz_korge_korge_foundation.$_$.c;
  var Companion_getInstance_2 = kotlin_com_soywiz_korge_korge_foundation.$_$.w1;
  var objectCreate = kotlin_kotlin.$_$.q8;
  var clamp01 = kotlin_com_soywiz_korge_korge_foundation.$_$.d5;
  var toIntRound = kotlin_com_soywiz_korge_korge_foundation.$_$.x5;
  var clamp01_0 = kotlin_com_soywiz_korge_korge_foundation.$_$.e5;
  var toIntRound_0 = kotlin_com_soywiz_korge_korge_foundation.$_$.y5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var startCoroutine = kotlin_kotlin.$_$.h7;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.n2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o2;
  var Continuation = kotlin_kotlin.$_$.z6;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var isInterface = kotlin_kotlin.$_$.j8;
  var Level_ERROR_getInstance = kotlin_com_soywiz_korge_korge_foundation.$_$.b;
  var completeWith = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.h;
  var toDuration = kotlin_kotlin.$_$.kb;
  var get_millisecondsLong = kotlin_com_soywiz_korge_korlibs_time.$_$.p;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var get_isNil = kotlin_com_soywiz_korge_korlibs_time.$_$.l;
  var Duration = kotlin_kotlin.$_$.jb;
  var withTimeout = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get = kotlin_kotlin.$_$.b7;
  var fold = kotlin_kotlin.$_$.a7;
  var minusKey = kotlin_kotlin.$_$.c7;
  var plus_0 = kotlin_kotlin.$_$.e7;
  var Element = kotlin_kotlin.$_$.d7;
  var FastArrayList_init_$Create$ = kotlin_com_soywiz_korge_korge_foundation.$_$.j;
  var Long = kotlin_kotlin.$_$.sb;
  var isComparable = kotlin_kotlin.$_$.g8;
  var isNumber = kotlin_kotlin.$_$.k8;
  var numberToDouble = kotlin_kotlin.$_$.n8;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var toString_1 = kotlin_kotlin.$_$.nc;
  var MutableList = kotlin_kotlin.$_$.l3;
  var MutableMap = kotlin_kotlin.$_$.m3;
  var getOrNull = kotlin_kotlin.$_$.t4;
  var List = kotlin_kotlin.$_$.i3;
  var Map = kotlin_kotlin.$_$.j3;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var emptyList = kotlin_kotlin.$_$.k4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s3;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.s2;
  var joinToString = kotlin_kotlin.$_$.v4;
  var numberToLong = kotlin_kotlin.$_$.p8;
  var toIntOrNull_0 = kotlin_kotlin.$_$.ya;
  var toLongOrNull = kotlin_kotlin.$_$.cb;
  var substringAfterLast = kotlin_kotlin.$_$.sa;
  var replace = kotlin_kotlin.$_$.na;
  var indexOf = kotlin_kotlin.$_$.da;
  var charSequenceLength = kotlin_kotlin.$_$.q7;
  var substringBefore = kotlin_kotlin.$_$.wa;
  var contains = kotlin_kotlin.$_$.z9;
  var charArrayOf = kotlin_kotlin.$_$.n7;
  var trimEnd = kotlin_kotlin.$_$.fb;
  var trim_0 = kotlin_kotlin.$_$.hb;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var toLong = kotlin_kotlin.$_$.v8;
  var Companion_getInstance_3 = kotlin_com_soywiz_korge_korlibs_time.$_$.d;
  var DateTime = kotlin_com_soywiz_korge_korlibs_time.$_$.g;
  var DateTime__hashCode_impl_yf0bc9 = kotlin_com_soywiz_korge_korlibs_time.$_$.a;
  var Enum = kotlin_kotlin.$_$.pb;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var endsWith = kotlin_kotlin.$_$.ba;
  var mapCapacity = kotlin_kotlin.$_$.h5;
  var coerceAtLeast = kotlin_kotlin.$_$.f9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var FastStringMap = kotlin_com_soywiz_korge_korge_foundation.$_$.e3;
  var removeAll = kotlin_kotlin.$_$.p5;
  var sortWith = kotlin_kotlin.$_$.v5;
  var Comparator = kotlin_kotlin.$_$.ob;
  var compareValues = kotlin_kotlin.$_$.m6;
  var Companion_instance_2 = kotlin_com_soywiz_korge_korge_foundation.$_$.s2;
  var until_0 = kotlin_kotlin.$_$.m9;
  var RuntimeException = kotlin_kotlin.$_$.vb;
  var linkedHashMapOf = kotlin_com_soywiz_korge_korge_foundation.$_$.w3;
  var toLongOrNull_0 = kotlin_kotlin.$_$.db;
  var extract = kotlin_com_soywiz_korge_korge_foundation.$_$.a7;
  var step = kotlin_kotlin.$_$.l9;
  var getS16 = kotlin_com_soywiz_korge_korge_foundation.$_$.f7;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var charArray = kotlin_kotlin.$_$.o7;
  var concatToString = kotlin_kotlin.$_$.w9;
  var IntIntMap_init_$Create$ = kotlin_com_soywiz_korge_korge_foundation.$_$.l;
  var charSequenceGet = kotlin_kotlin.$_$.p7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k2;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.v;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.m7;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.e1;
  var stackTraceToString = kotlin_kotlin.$_$.lc;
  var concatToString_0 = kotlin_kotlin.$_$.x9;
  var get_lastIndex_0 = kotlin_kotlin.$_$.ga;
  var lastIndexOf = kotlin_kotlin.$_$.ha;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.x;
  var split_0 = kotlin_kotlin.$_$.oa;
  var dropLast = kotlin_kotlin.$_$.aa;
  var substringAfter = kotlin_kotlin.$_$.ta;
  var substringBefore_0 = kotlin_kotlin.$_$.va;
  var contains_0 = kotlin_kotlin.$_$.y9;
  var isBlank = kotlin_kotlin.$_$.fa;
  var substringBeforeLast = kotlin_kotlin.$_$.ua;
  var trimStart = kotlin_kotlin.$_$.gb;
  var ByteArrayBuilder_init_$Create$ = kotlin_com_soywiz_korge_korge_foundation.$_$.a1;
  var Char__toByte_impl_7s7yt0 = kotlin_kotlin.$_$.j2;
  var toByte = kotlin_kotlin.$_$.u8;
  var Char = kotlin_kotlin.$_$.mb;
  var toMutableList = kotlin_kotlin.$_$.e6;
  var toMap_0 = kotlin_kotlin.$_$.d6;
  var filterNotNull = kotlin_kotlin.$_$.p4;
  var equals_0 = kotlin_kotlin.$_$.ca;
  var first = kotlin_kotlin.$_$.r4;
  var sortedWith = kotlin_kotlin.$_$.w5;
  var plus_1 = kotlin_kotlin.$_$.o5;
  var Collection = kotlin_kotlin.$_$.g3;
  var linkedMapOf = kotlin_kotlin.$_$.e5;
  var UnsupportedOperationException = kotlin_kotlin.$_$.zb;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var ClosedRange = kotlin_kotlin.$_$.d9;
  var contains_1 = kotlin_kotlin.$_$.j9;
  var arraycopy_0 = kotlin_com_soywiz_korge_korge_foundation.$_$.i6;
  var toIntClamp = kotlin_com_soywiz_korge_korge_foundation.$_$.w5;
  var copyOf = kotlin_kotlin.$_$.d4;
  var ByteArrayBuilder = kotlin_com_soywiz_korge_korge_foundation.$_$.b6;
  var clamp_0 = kotlin_com_soywiz_korge_korge_foundation.$_$.j5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Pair = kotlin_kotlin.$_$.ub;
  var fillArrayVal = kotlin_kotlin.$_$.v7;
  var isNanOrInfinite = kotlin_com_soywiz_korge_korge_foundation.$_$.o5;
  var roundDecimalPlaces = kotlin_com_soywiz_korge_korge_foundation.$_$.s5;
  var indexOf_0 = kotlin_kotlin.$_$.ea;
  var toInt_0 = kotlin_kotlin.$_$.ab;
  var abs = kotlin_kotlin.$_$.z8;
  var repeat = kotlin_kotlin.$_$.la;
  var replace_0 = kotlin_kotlin.$_$.ma;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.h2;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.f2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.a3;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.w2;
  var println = kotlin_kotlin.$_$.j7;
  var Companion_instance_3 = kotlin_kotlin.$_$.b3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m2;
  var createFailure = kotlin_kotlin.$_$.cc;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.r2;
  var DoubleArrayList = kotlin_com_soywiz_korge_korge_foundation.$_$.w2;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.mc;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Deferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var PerformanceCounter_instance = kotlin_com_soywiz_korge_korlibs_time.$_$.e;
  var Duration__minus_impl_q5cfm7 = kotlin_kotlin.$_$.z1;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.y2;
  var Duration__compareTo_impl_pchp0f = kotlin_kotlin.$_$.t1;
  var asInt32Array = kotlin_com_soywiz_korge_korge_foundation.$_$.v6;
  var intercepted = kotlin_kotlin.$_$.s6;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isArray = kotlin_kotlin.$_$.d8;
  var newThrowable = kotlin_kotlin.$_$.l8;
  var firstOrNull = kotlin_kotlin.$_$.q4;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var toTypedArray = kotlin_kotlin.$_$.k6;
  var returnIfSuspended = kotlin_kotlin.$_$.j;
  var isByteArray = kotlin_kotlin.$_$.e8;
  var drop = kotlin_kotlin.$_$.j4;
  var get_jsGlobalThis = kotlin_com_soywiz_korge_korge_foundation.$_$.f8;
  var Companion_instance_4 = kotlin_com_soywiz_korge_korge_foundation.$_$.v1;
  var lastOrNull = kotlin_kotlin.$_$.b5;
  var Exception_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(AudioFormat, 'AudioFormat', classMeta, VOID, VOID, VOID, VOID, VOID, [2, 4]);
  setMetadataFor(AudioFormats, 'AudioFormats', classMeta, AudioFormat, VOID, AudioFormats, VOID, VOID, [2, 4]);
  setMetadataFor(MP3Decoder, 'MP3Decoder', classMeta, AudioFormat, VOID, MP3Decoder, VOID, VOID, [2, 4]);
  setMetadataFor(Companion_0, 'Companion', objectMeta, MP3Decoder, VOID, VOID, VOID, VOID, [2, 4]);
  setMetadataFor(BaseMinimp3AudioFormat, 'BaseMinimp3AudioFormat', classMeta, AudioFormat, VOID, VOID, VOID, VOID, [2, 3, 4]);
  setMetadataFor(Minimp3AudioFormat, 'Minimp3AudioFormat', objectMeta, BaseMinimp3AudioFormat, VOID, VOID, VOID, VOID, [2, 4]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(WAV, 'WAV', classMeta, AudioFormat, VOID, WAV, VOID, VOID, [2, 4]);
  setMetadataFor(Companion_2, 'Companion', objectMeta, WAV, VOID, VOID, VOID, VOID, [2, 4]);
  setMetadataFor(NativeSoundProvider, 'NativeSoundProvider', classMeta, VOID, VOID, NativeSoundProvider, VOID, VOID, [1, 3, 4, 2]);
  setMetadataFor(NativeSoundProviderNew, 'NativeSoundProviderNew', classMeta, NativeSoundProvider, VOID, NativeSoundProviderNew, VOID, VOID, [1, 3, 4, 2]);
  setMetadataFor(DummyNativeSoundProvider, 'DummyNativeSoundProvider', classMeta, NativeSoundProvider, VOID, DummyNativeSoundProvider, VOID, VOID, [1, 3, 4, 2]);
  setMetadataFor(Companion_3, 'Companion', objectMeta, DummyNativeSoundProvider, VOID, VOID, VOID, VOID, [1, 3, 4, 2]);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Bitmap, 'Bitmap', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta, VOID, VOID, VOID, VOID, VOID, [2, 3]);
  setMetadataFor(Bitmap32$iterator$slambda, 'Bitmap32$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Bitmap32, 'Bitmap32', classMeta, Bitmap, [Bitmap, Iterable]);
  setMetadataFor(BitmapIndexed, 'BitmapIndexed', classMeta, Bitmap);
  setMetadataFor(Bitmap8, 'Bitmap8', classMeta, BitmapIndexed);
  setMetadataFor(Bitmaps, 'Bitmaps', objectMeta);
  setMetadataFor(FloatBitmap32, 'FloatBitmap32', classMeta, Bitmap);
  setMetadataFor(MultiBitmap, 'MultiBitmap', classMeta, Bitmap);
  setMetadataFor(NativeImage, 'NativeImage', classMeta, Bitmap);
  function get_forcedTexTarget() {
    return 3553;
  }
  setMetadataFor(ForcedTexId, 'ForcedTexId', interfaceMeta);
  setMetadataFor(NullBitmap, 'NullBitmap', classMeta, Bitmap);
  setMetadataFor(ColorFormat32, 'ColorFormat32', classMeta);
  setMetadataFor(ColorTransformMul, 'ColorTransformMul', classMeta, VOID, VOID, ColorTransformMul);
  setMetadataFor(Colors, 'Colors', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta, ColorFormat32);
  setMetadataFor(RGBA, 'RGBA', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Glyph, 'Glyph', classMeta);
  function get_0(charCode) {
    var tmp0_elvis_lhs = this.c2b(charCode);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this.c2b(32) : tmp0_elvis_lhs;
    return tmp1_elvis_lhs == null ? this.b2b() : tmp1_elvis_lhs;
  }
  setMetadataFor(BitmapFont, 'BitmapFont', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(BitmapFontImpl, 'BitmapFontImpl', classMeta, VOID, [BitmapFont], VOID, VOID, VOID, [0]);
  setMetadataFor(FontMetrics, 'FontMetrics', classMeta, VOID, VOID, FontMetrics);
  setMetadataFor(GlyphMetrics, 'GlyphMetrics', classMeta, VOID, VOID, GlyphMetrics);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(ImageDecodingProps, 'ImageDecodingProps', classMeta, VOID, VOID, ImageDecodingProps);
  setMetadataFor($decodeCOROUTINE$50, '$decodeCOROUTINE$50', classMeta, CoroutineImpl);
  setMetadataFor(ImageFormat, 'ImageFormat', classMeta, VOID, VOID, VOID, VOID, VOID, [2, 1]);
  setMetadataFor(ImageDecoderNotFoundException, 'ImageDecoderNotFoundException', classMeta, Exception);
  setMetadataFor($decodeSuspendCOROUTINE$55, '$decodeSuspendCOROUTINE$55', classMeta, CoroutineImpl);
  setMetadataFor(ImageFormats, 'ImageFormats', classMeta, ImageFormat, VOID, VOID, VOID, VOID, [2, 1]);
  setMetadataFor(ImageFormatsMutable, 'ImageFormatsMutable', classMeta, ImageFormats, VOID, ImageFormatsMutable, VOID, VOID, [2, 1]);
  setMetadataFor(ImageInfo, 'ImageInfo', classMeta, VOID, VOID, ImageInfo);
  setMetadataFor($readBitmapCOROUTINE$56, '$readBitmapCOROUTINE$56', classMeta, CoroutineImpl);
  setMetadataFor($readBitmapSliceCOROUTINE$57, '$readBitmapSliceCOROUTINE$57', classMeta, CoroutineImpl);
  setMetadataFor($_readBitmapCOROUTINE$58, '$_readBitmapCOROUTINE$58', classMeta, CoroutineImpl);
  setMetadataFor(NativeImageFormatProvider, 'NativeImageFormatProvider', classMeta, VOID, VOID, VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BaseNativeImageFormatProvider, 'BaseNativeImageFormatProvider', classMeta, NativeImageFormatProvider, VOID, BaseNativeImageFormatProvider, VOID, VOID, [2, 1, 3]);
  setMetadataFor(NativeImageResult, 'NativeImageResult', classMeta);
  setMetadataFor(BitmapNativeImage, 'BitmapNativeImage', classMeta, NativeImage);
  setMetadataFor($decodeInternalCOROUTINE$61, '$decodeInternalCOROUTINE$61', classMeta, CoroutineImpl);
  setMetadataFor($decodeSuspendCOROUTINE$65, '$decodeSuspendCOROUTINE$65', classMeta, CoroutineImpl);
  setMetadataFor($decodeCOROUTINE$66, '$decodeCOROUTINE$66', classMeta, CoroutineImpl);
  setMetadataFor($decodeCOROUTINE$67, '$decodeCOROUTINE$67', classMeta, CoroutineImpl);
  setMetadataFor(launchUnscoped$1, VOID, classMeta, VOID, [Continuation]);
  setMetadataFor(_async$slambda, '_async$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_launch$slambda, '_launch$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(launchUnscopedAndWait$1, VOID, classMeta, VOID, [Continuation]);
  setMetadataFor(AsyncThread$sync$slambda, 'AsyncThread$sync$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(AsyncThread, 'AsyncThread', classMeta, VOID, VOID, AsyncThread, VOID, VOID, [0, 1]);
  setMetadataFor($withTimeoutNullableCOROUTINE$79, '$withTimeoutNullableCOROUTINE$79', classMeta, CoroutineImpl);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(PreferSyncIo, 'PreferSyncIo', classMeta, VOID, [Element]);
  setMetadataFor(BaseSignal, 'BaseSignal', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Signal, 'Signal', classMeta, BaseSignal, VOID, Signal, VOID, VOID, [0]);
  setMetadataFor(Node, 'Node', classMeta);
  setMetadataFor($invokeCOROUTINE$80, '$invokeCOROUTINE$80', classMeta, CoroutineImpl);
  setMetadataFor(AsyncSignal, 'AsyncSignal', classMeta, BaseSignal, VOID, AsyncSignal, VOID, VOID, [1, 0]);
  setMetadataFor(KorAtomicRef, 'KorAtomicRef', classMeta);
  setMetadataFor(KorAtomicLong, 'KorAtomicLong', classMeta);
  setMetadataFor(KorAtomicInt, 'KorAtomicInt', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(Dyn, 'Dyn', classMeta, VOID, [Comparable], VOID, VOID, VOID, [2, 1]);
  function get_global() {
    return null;
  }
  setMetadataFor(DynApi, 'DynApi', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [2, 3]);
  setMetadataFor(VfsNamed, 'VfsNamed', classMeta);
  setMetadataFor(Vfs$Proxy$initOnce$slambda, 'Vfs$Proxy$initOnce$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor($getUnderlyingUnscapedFileCOROUTINE$118, '$getUnderlyingUnscapedFileCOROUTINE$118', classMeta, CoroutineImpl);
  setMetadataFor($initOnceCOROUTINE$119, '$initOnceCOROUTINE$119', classMeta, CoroutineImpl);
  setMetadataFor($openCOROUTINE$121, '$openCOROUTINE$121', classMeta, CoroutineImpl);
  setMetadataFor($readRangeCOROUTINE$122, '$readRangeCOROUTINE$122', classMeta, CoroutineImpl);
  setMetadataFor($statCOROUTINE$125, '$statCOROUTINE$125', classMeta, CoroutineImpl);
  setMetadataFor(Vfs, 'Vfs', classMeta, VOID, VOID, VOID, VOID, VOID, [0, 3, 2, 4, 1]);
  setMetadataFor(Proxy, 'Proxy', classMeta, Vfs, VOID, VOID, VOID, VOID, [1, 0, 4, 2, 3]);
  setMetadataFor($readRangeCOROUTINE$109, '$readRangeCOROUTINE$109', classMeta, CoroutineImpl);
  setMetadataFor(VfsStat, 'VfsStat', classMeta);
  setMetadataFor(VfsOpenMode, 'VfsOpenMode', classMeta, Enum);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(VfsCachedStatContext, 'VfsCachedStatContext', classMeta, VOID, [Element]);
  setMetadataFor($readStringCOROUTINE$140, '$readStringCOROUTINE$140', classMeta, CoroutineImpl);
  setMetadataFor($readAsSyncStreamCOROUTINE$142, '$readAsSyncStreamCOROUTINE$142', classMeta, CoroutineImpl);
  setMetadataFor($statCOROUTINE$143, '$statCOROUTINE$143', classMeta, CoroutineImpl);
  setMetadataFor(VfsFile, 'VfsFile', classMeta, VfsNamed, VOID, VOID, VOID, VOID, [2, 3, 0, 1, 4, 5]);
  setMetadataFor(FinalVfsFile, 'FinalVfsFile', classMeta);
  setMetadataFor($getLengthCOROUTINE$163, '$getLengthCOROUTINE$163', classMeta, CoroutineImpl);
  setMetadataFor(CatalogVfs$open$slambda, 'CatalogVfs$open$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  function hasLength($completion) {
    var tmp = new $hasLengthCOROUTINE$241(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function getLength($completion) {
    throw UnsupportedOperationException_init_$Create$_0();
  }
  setMetadataFor(AsyncGetLengthStream, 'AsyncGetLengthStream', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(AsyncStreamBase, 'AsyncStreamBase', classMeta, VOID, [AsyncGetLengthStream], AsyncStreamBase, VOID, VOID, [4, 1, 0]);
  setMetadataFor(CatalogVfs$open$2, VOID, classMeta, AsyncStreamBase, VOID, VOID, VOID, VOID, [4, 1, 0]);
  setMetadataFor($openCOROUTINE$156, '$openCOROUTINE$156', classMeta, CoroutineImpl);
  setMetadataFor($statCOROUTINE$157, '$statCOROUTINE$157', classMeta, CoroutineImpl);
  setMetadataFor($statOrNullCOROUTINE$158, '$statOrNullCOROUTINE$158', classMeta, CoroutineImpl);
  setMetadataFor($cachedListSimpleStatsOrNullCOROUTINE$161, '$cachedListSimpleStatsOrNullCOROUTINE$161', classMeta, CoroutineImpl);
  setMetadataFor($listSimpleStatsOrNullCOROUTINE$162, '$listSimpleStatsOrNullCOROUTINE$162', classMeta, CoroutineImpl);
  setMetadataFor(CatalogVfs, 'CatalogVfs', classMeta, Proxy, VOID, VOID, VOID, VOID, [2, 1, 0, 4, 3]);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(JailVfs, 'JailVfs', classMeta, Proxy, VOID, VOID, VOID, VOID, [1, 0, 4, 3, 2]);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(LocalVfs, 'LocalVfs', classMeta, Vfs, VOID, VOID, VOID, VOID, [1, 0, 3, 4, 2]);
  setMetadataFor(StandardVfs, 'StandardVfs', classMeta, VOID, VOID, StandardVfs);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor($closeCOROUTINE$181, '$closeCOROUTINE$181', classMeta, CoroutineImpl);
  setMetadataFor(MountableVfs, 'MountableVfs', classMeta, Proxy, VOID, VOID, VOID, VOID, [0, 1, 4, 3, 2]);
  function appPreferencesFolder(appId) {
    return Companion_instance_2.h1x() ? '/Users/' + Companion_instance_21.e15('USER') + '/Library/Preferences/' + appId : Companion_instance_2.f1x() ? '' + Companion_instance_21.e15('APPDATA') + '/' + appId : '' + Companion_instance_21.e15('HOME') + '/.config/' + appId;
  }
  setMetadataFor(StandardPathsBase, 'StandardPathsBase', interfaceMeta);
  setMetadataFor($readCOROUTINE$189, '$readCOROUTINE$189', classMeta, CoroutineImpl);
  setMetadataFor($getLengthCOROUTINE$190, '$getLengthCOROUTINE$190', classMeta, CoroutineImpl);
  setMetadataFor(UrlVfs$open$2, VOID, classMeta, AsyncStreamBase, VOID, VOID, VOID, VOID, [4, 0, 1]);
  setMetadataFor($openCOROUTINE$183, '$openCOROUTINE$183', classMeta, CoroutineImpl);
  setMetadataFor($_readRangeBaseCOROUTINE$185, '$_readRangeBaseCOROUTINE$185', classMeta, CoroutineImpl);
  setMetadataFor($readRangeCOROUTINE$186, '$readRangeCOROUTINE$186', classMeta, CoroutineImpl);
  setMetadataFor($statCOROUTINE$188, '$statCOROUTINE$188', classMeta, CoroutineImpl);
  setMetadataFor(UrlVfs_0, 'UrlVfs', classMeta, Vfs, VOID, VOID, VOID, VOID, [2, 1, 3, 0, 4]);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(Charset, 'Charset', classMeta);
  setMetadataFor(UTF16Charset, 'UTF16Charset', classMeta, Charset);
  setMetadataFor(BaseSingleByteCharset, 'BaseSingleByteCharset', classMeta, Charset);
  setMetadataFor(SingleByteCharset, 'SingleByteCharset', classMeta, BaseSingleByteCharset);
  setMetadataFor(ASCII, 'ASCII', objectMeta, SingleByteCharset);
  setMetadataFor(ISO_8859_1, 'ISO_8859_1', objectMeta, SingleByteCharset);
  setMetadataFor(UTC8CharsetBase, 'UTC8CharsetBase', classMeta, Charset);
  function cancel(e) {
    this.r13();
  }
  setMetadataFor(CloseableCancellable, 'CloseableCancellable', interfaceMeta);
  setMetadataFor(CancellableGroup, 'CancellableGroup', classMeta, VOID, [CloseableCancellable], CancellableGroup);
  setMetadataFor(sam$korlibs_io_lang_Disposable$0, 'sam$korlibs_io_lang_Disposable$0', classMeta);
  setMetadataFor(sam$korlibs_io_lang_Cancellable$0, 'sam$korlibs_io_lang_Cancellable$0', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(InvalidOperationException, 'InvalidOperationException', classMeta, Exception, VOID, InvalidOperationException);
  setMetadataFor(MalformedInputException, 'MalformedInputException', classMeta, Exception);
  setMetadataFor(IOException, 'IOException', classMeta, Exception);
  setMetadataFor(FileAlreadyExistsException, 'FileAlreadyExistsException', classMeta, IOException);
  setMetadataFor(UnreachableException, 'UnreachableException', classMeta, Exception, VOID, UnreachableException);
  setMetadataFor(QueryString, 'QueryString', objectMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(URL_0, 'URL', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(Methods, 'Methods', classMeta, Enum);
  setMetadataFor(HttpException, 'HttpException', classMeta, IOException);
  setMetadataFor(Headers, 'Headers', classMeta, VOID, [Iterable]);
  setMetadataFor(Companion_20, 'Companion', objectMeta, VOID, VOID, VOID, VOID, VOID, [4]);
  setMetadataFor($readAllBytesCOROUTINE$194, '$readAllBytesCOROUTINE$194', classMeta, CoroutineImpl);
  setMetadataFor($readAllStringCOROUTINE$195, '$readAllStringCOROUTINE$195', classMeta, CoroutineImpl);
  setMetadataFor($checkErrorsCOROUTINE$196, '$checkErrorsCOROUTINE$196', classMeta, CoroutineImpl);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(Response, 'Response', classMeta, VOID, VOID, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(CompletedResponse, 'CompletedResponse', classMeta);
  setMetadataFor(RequestConfig, 'RequestConfig', classMeta, VOID, VOID, RequestConfig);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor($requestCOROUTINE$199, '$requestCOROUTINE$199', classMeta, CoroutineImpl);
  setMetadataFor($requestAsBytesCOROUTINE$201, '$requestAsBytesCOROUTINE$201', classMeta, CoroutineImpl);
  setMetadataFor($readBytesCOROUTINE$202, '$readBytesCOROUTINE$202', classMeta, CoroutineImpl);
  setMetadataFor(HttpClient, 'HttpClient', classMeta, VOID, VOID, VOID, VOID, VOID, [4, 5, 2]);
  setMetadataFor(HttpStatusMessage, 'HttpStatusMessage', objectMeta);
  setMetadataFor(ProxiedHttpFactory, 'ProxiedHttpFactory', classMeta);
  setMetadataFor(Fixed, 'Fixed', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Resources, 'Resources', classMeta);
  setMetadataFor(AsyncStream$read$slambda, 'AsyncStream$read$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor($readCOROUTINE$223, '$readCOROUTINE$223', classMeta, CoroutineImpl);
  setMetadataFor($readInternalCOROUTINE$225, '$readInternalCOROUTINE$225', classMeta, CoroutineImpl);
  setMetadataFor($getAvailableCOROUTINE$227, '$getAvailableCOROUTINE$227', classMeta, CoroutineImpl);
  function getPosition($completion) {
    throw UnsupportedOperationException_init_$Create$_0();
  }
  setMetadataFor(AsyncGetPositionStream, 'AsyncGetPositionStream', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(AsyncPositionLengthStream, 'AsyncPositionLengthStream', interfaceMeta, VOID, [AsyncGetPositionStream, AsyncGetLengthStream], VOID, VOID, VOID, [1, 0]);
  setMetadataFor(AsyncStream, 'AsyncStream', classMeta, VOID, [AsyncGetPositionStream, AsyncGetLengthStream, AsyncPositionLengthStream], VOID, VOID, VOID, [3, 1, 0]);
  setMetadataFor($hasLengthCOROUTINE$241, '$hasLengthCOROUTINE$241', classMeta, CoroutineImpl);
  setMetadataFor(MemoryAsyncStreamBase, 'MemoryAsyncStreamBase', classMeta, AsyncStreamBase, VOID, MemoryAsyncStreamBase_init_$Create$, VOID, VOID, [1, 0, 4]);
  setMetadataFor($_readCOROUTINE$253, '$_readCOROUTINE$253', classMeta, CoroutineImpl);
  setMetadataFor(BufferedStreamBase, 'BufferedStreamBase', classMeta, AsyncStreamBase, VOID, VOID, VOID, VOID, [4, 1, 0]);
  setMetadataFor($readBytesUpToCOROUTINE$230, '$readBytesUpToCOROUTINE$230', classMeta, CoroutineImpl);
  setMetadataFor($readAllCOROUTINE$239, '$readAllCOROUTINE$239', classMeta, CoroutineImpl);
  setMetadataFor($readBytesExactCOROUTINE$244, '$readBytesExactCOROUTINE$244', classMeta, CoroutineImpl);
  setMetadataFor($readBytesUpToCopyCOROUTINE$247, '$readBytesUpToCopyCOROUTINE$247', classMeta, CoroutineImpl);
  setMetadataFor($getAvailableCOROUTINE$248, '$getAvailableCOROUTINE$248', classMeta, CoroutineImpl);
  setMetadataFor($readExactCOROUTINE$254, '$readExactCOROUTINE$254', classMeta, CoroutineImpl);
  setMetadataFor($readBytesUpToCOROUTINE$256, '$readBytesUpToCOROUTINE$256', classMeta, CoroutineImpl);
  setMetadataFor($readBytesCOROUTINE$257, '$readBytesCOROUTINE$257', classMeta, CoroutineImpl);
  setMetadataFor(SyncStream, 'SyncStream', classMeta);
  setMetadataFor(SyncStreamBase, 'SyncStreamBase', classMeta, VOID, VOID, SyncStreamBase);
  setMetadataFor(MemorySyncStreamBase, 'MemorySyncStreamBase', classMeta, SyncStreamBase, VOID, MemorySyncStreamBase_init_$Create$);
  setMetadataFor(SliceSyncStreamBase, 'SliceSyncStreamBase', classMeta, SyncStreamBase);
  setMetadataFor(Text, 'Text', interfaceMeta);
  setMetadataFor(Marker, 'Marker', classMeta);
  setMetadataFor(Line, 'Line', classMeta, VOID, [Text]);
  setMetadataFor(LineDeferred, 'LineDeferred', classMeta);
  setMetadataFor(EmptyLineOnce, 'EmptyLineOnce', objectMeta);
  setMetadataFor(Indent, 'Indent', objectMeta);
  setMetadataFor(Unindent, 'Unindent', objectMeta);
  setMetadataFor(INDENTS, 'INDENTS', objectMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(IndenterEvaluator, 'IndenterEvaluator', classMeta);
  setMetadataFor(Indenter, 'Indenter', classMeta, VOID, VOID, Indenter);
  setMetadataFor(NumberParser, 'NumberParser', objectMeta);
  setMetadataFor(Once, 'Once', classMeta, VOID, VOID, Once);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(BaseStrReader, 'BaseStrReader', classMeta);
  setMetadataFor(StrReader, 'StrReader', classMeta, BaseStrReader);
  setMetadataFor(DemoWorkerTask$execute$slambda, 'DemoWorkerTask$execute$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(WorkerTask, 'WorkerTask', classMeta, VOID, VOID, WorkerTask);
  setMetadataFor(DemoWorkerTask, 'DemoWorkerTask', classMeta, WorkerTask, VOID, DemoWorkerTask);
  setMetadataFor(WorkerTask$runSuspend$slambda, 'WorkerTask$runSuspend$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(_WorkerImpl, '_WorkerImpl', classMeta, VOID, VOID, _WorkerImpl, VOID, VOID, [4]);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(Context, 'Context', classMeta);
  setMetadataFor(Json, 'Json', objectMeta);
  setMetadataFor(HtmlNativeSoundProvider, 'HtmlNativeSoundProvider', classMeta, NativeSoundProviderNew, VOID, HtmlNativeSoundProvider, VOID, VOID, [4, 1, 3, 2]);
  setMetadataFor(HtmlSimpleSound, 'HtmlSimpleSound', objectMeta, VOID, VOID, VOID, VOID, VOID, [0, 2, 1]);
  setMetadataFor(HtmlCanvas, 'HtmlCanvas', objectMeta);
  setMetadataFor(HtmlImage, 'HtmlImage', objectMeta);
  setMetadataFor(NodeJsNativeImageFormatProvider, 'NodeJsNativeImageFormatProvider', objectMeta, BaseNativeImageFormatProvider, VOID, VOID, VOID, VOID, [2, 3, 1]);
  setMetadataFor($decodeInternalCOROUTINE$279, '$decodeInternalCOROUTINE$279', classMeta, CoroutineImpl);
  setMetadataFor($decodeInternalCOROUTINE$280, '$decodeInternalCOROUTINE$280', classMeta, CoroutineImpl);
  setMetadataFor(HtmlNativeImageFormatProvider, 'HtmlNativeImageFormatProvider', objectMeta, NativeImageFormatProvider, VOID, VOID, VOID, VOID, [2, 3, 1]);
  setMetadataFor(HtmlNativeImage, 'HtmlNativeImage', classMeta, NativeImage);
  setMetadataFor($decodeToCanvasCOROUTINE$281, '$decodeToCanvasCOROUTINE$281', classMeta, CoroutineImpl);
  setMetadataFor($loadCanvasCOROUTINE$282, '$loadCanvasCOROUTINE$282', classMeta, CoroutineImpl);
  setMetadataFor(BrowserImage, 'BrowserImage', objectMeta, VOID, VOID, VOID, VOID, VOID, [2, 1]);
  setMetadataFor(DynamicInternal, 'DynamicInternal', objectMeta, VOID, [DynApi], VOID, VOID, VOID, [2, 3]);
  setMetadataFor(BlobAsyncBaseStream, 'BlobAsyncBaseStream', classMeta, AsyncStreamBase, VOID, VOID, VOID, VOID, [0, 4, 1]);
  setMetadataFor(toVfs$1, VOID, classMeta, Vfs, VOID, VOID, VOID, VOID, [2, 1, 0, 3, 4]);
  setMetadataFor(standardVfs$1, VOID, classMeta, StandardVfs);
  setMetadataFor(StandardPaths, 'StandardPaths', objectMeta, VOID, [StandardPathsBase]);
  setMetadataFor(EnvironmentInternal, 'EnvironmentInternal', objectMeta);
  setMetadataFor(FileNotFoundException, 'FileNotFoundException', classMeta, IOException);
  setMetadataFor(EOFException, 'EOFException', classMeta, IOException);
  setMetadataFor(JS_UTF8$1, VOID, classMeta, UTC8CharsetBase);
  setMetadataFor(httpFactory$2$1, VOID, classMeta);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(JsRuntime, 'JsRuntime', classMeta, VOID, VOID, VOID, VOID, VOID, [1, 4]);
  setMetadataFor(JsRuntimeBrowser, 'JsRuntimeBrowser', objectMeta, JsRuntime, VOID, VOID, VOID, VOID, [1, 4]);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor($requestInternalCOROUTINE$283, '$requestInternalCOROUTINE$283', classMeta, CoroutineImpl);
  setMetadataFor(HttpClientBrowserJs, 'HttpClientBrowserJs', classMeta, HttpClient, VOID, HttpClientBrowserJs, VOID, VOID, [4, 5, 2]);
  setMetadataFor(JsRuntimeDeno, 'JsRuntimeDeno', objectMeta, JsRuntime, VOID, VOID, VOID, VOID, [1, 4]);
  setMetadataFor($openCOROUTINE$284, '$openCOROUTINE$284', classMeta, CoroutineImpl);
  setMetadataFor($statCOROUTINE$289, '$statCOROUTINE$289', classMeta, CoroutineImpl);
  setMetadataFor(DenoLocalVfs, 'DenoLocalVfs', classMeta, Vfs, VOID, DenoLocalVfs, VOID, VOID, [2, 1, 0, 3, 4]);
  setMetadataFor($readCOROUTINE$291, '$readCOROUTINE$291', classMeta, CoroutineImpl);
  setMetadataFor($getLengthCOROUTINE$293, '$getLengthCOROUTINE$293', classMeta, CoroutineImpl);
  setMetadataFor(DenoAsyncStreamBase, 'DenoAsyncStreamBase', classMeta, AsyncStreamBase, VOID, VOID, VOID, VOID, [4, 1, 0]);
  setMetadataFor(JsRuntimeNode, 'JsRuntimeNode', objectMeta, JsRuntime, VOID, VOID, VOID, VOID, [1, 4]);
  setMetadataFor($openCOROUTINE$297, '$openCOROUTINE$297', classMeta, CoroutineImpl);
  setMetadataFor(NodeJsLocalVfs, 'NodeJsLocalVfs', classMeta, LocalVfs, VOID, NodeJsLocalVfs, VOID, VOID, [2, 1, 4, 0, 3]);
  setMetadataFor($requestInternalCOROUTINE$302, '$requestInternalCOROUTINE$302', classMeta, CoroutineImpl);
  setMetadataFor(HttpClientNodeJs, 'HttpClientNodeJs', classMeta, HttpClient, VOID, HttpClientNodeJs, VOID, VOID, [4, 5, 2]);
  setMetadataFor($closeCOROUTINE$305, '$closeCOROUTINE$305', classMeta, CoroutineImpl);
  setMetadataFor(NodeFDStream, 'NodeFDStream', classMeta, AsyncStreamBase, VOID, VOID, VOID, VOID, [4, 1, 0]);
  setMetadataFor(workerImpl$o$insideWorker$lambda$lambda$slambda, 'workerImpl$o$insideWorker$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(workerImpl$1, VOID, classMeta, _WorkerImpl, VOID, VOID, VOID, VOID, [4]);
  //endregion
  function get_defaultAudioFormats() {
    _init_properties_AudioFormat_kt__9os7np();
    // Inline function 'kotlin.getValue' call
    var this_0 = defaultAudioFormats$delegate;
    defaultAudioFormats$factory();
    return this_0.p3();
  }
  var defaultAudioFormats$delegate;
  function Companion() {
  }
  protoOf(Companion).d1y = function (formats) {
    return (new AudioFormats()).h1y(formats.slice());
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function invalidate($this) {
    $this.g1y_1 = null;
    return $this;
  }
  function AudioFormats() {
    AudioFormat.call(this, []);
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.f1y_1 = ArrayList_init_$Create$();
    this.g1y_1 = null;
  }
  protoOf(AudioFormats).i1y = function () {
    if (this.g1y_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var this_0 = this.f1y_1;
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'korlibs.audio.format.AudioFormats.<get-extensions>.<anonymous>' call
        var list = element.i1y();
        addAll(destination, list);
      }
      tmp.g1y_1 = toSet(destination);
    }
    return ensureNotNull(this.g1y_1);
  };
  protoOf(AudioFormats).h1y = function (formats) {
    // Inline function 'kotlin.apply' call
    var this_0 = invalidate(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.audio.format.AudioFormats.register.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_1 = this_0.f1y_1;
    addAll_0(this_1, formats);
    return this_0;
  };
  function standardAudioFormats() {
    _init_properties_AudioFormat_kt__9os7np();
    return Companion_instance_5.d1y([Companion_getInstance_9(), Companion_getInstance_7()]);
  }
  function AudioFormat(exts) {
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(exts.length);
    var inductionVariable = 0;
    var last = exts.length;
    while (inductionVariable < last) {
      var item = exts[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'korlibs.audio.format.AudioFormat.extensions.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var this_0 = item.toLowerCase();
      var tmp$ret$3 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      destination.p(tmp$ret$3);
    }
    tmp.j1y_1 = toSet(destination);
  }
  protoOf(AudioFormat).i1y = function () {
    return this.j1y_1;
  };
  protoOf(AudioFormat).fb = function () {
    return 'AudioFormat';
  };
  protoOf(AudioFormat).toString = function () {
    return this.fb() + '(' + sorted(this.i1y()) + ')';
  };
  function defaultAudioFormats$delegate$lambda() {
    _init_properties_AudioFormat_kt__9os7np();
    return standardAudioFormats();
  }
  function defaultAudioFormats$factory() {
    return getPropertyCallableRef('defaultAudioFormats', 0, KProperty0, function () {
      return get_defaultAudioFormats();
    }, null);
  }
  var properties_initialized_AudioFormat_kt_2wpbb7;
  function _init_properties_AudioFormat_kt__9os7np() {
    if (!properties_initialized_AudioFormat_kt_2wpbb7) {
      properties_initialized_AudioFormat_kt_2wpbb7 = true;
      defaultAudioFormats$delegate = lazy(defaultAudioFormats$delegate$lambda);
    }
  }
  function Companion_0() {
    Companion_instance_6 = this;
    MP3Decoder.call(this);
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_0();
    return Companion_instance_6;
  }
  function MP3Decoder() {
    Companion_getInstance_7();
    AudioFormat.call(this, ['mp3']);
    this.l1y_1 = Minimp3AudioFormat_getInstance();
  }
  protoOf(MP3Decoder).toString = function () {
    return 'NativeMp3DecoderFormat';
  };
  function Minimp3AudioFormat() {
    Minimp3AudioFormat_instance = this;
    BaseMinimp3AudioFormat.call(this);
  }
  var Minimp3AudioFormat_instance;
  function Minimp3AudioFormat_getInstance() {
    if (Minimp3AudioFormat_instance == null)
      new Minimp3AudioFormat();
    return Minimp3AudioFormat_instance;
  }
  function Companion_1() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.byteArrayOf' call
    tmp.m1y_1 = new Int8Array([88, 105, 110, 103]);
    var tmp_0 = this;
    // Inline function 'kotlin.byteArrayOf' call
    tmp_0.n1y_1 = new Int8Array([73, 110, 102, 111]);
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_1();
    return Companion_instance_7;
  }
  function BaseMinimp3AudioFormat() {
    Companion_getInstance_8();
    AudioFormat.call(this, ['mp3']);
  }
  function Companion_2() {
    Companion_instance_8 = this;
    WAV.call(this);
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_2();
    return Companion_instance_8;
  }
  function WAV() {
    Companion_getInstance_9();
    AudioFormat.call(this, ['wav']);
  }
  var DEFAULT_MAX_SAMPLES;
  function NativeSoundProvider$audioFormats$delegate$lambda() {
    return get_defaultAudioFormats();
  }
  function NativeSoundProvider() {
    this.o1y_1 = 'unknown';
    this.p1y_1 = false;
    var tmp = this;
    tmp.q1y_1 = lazy(NativeSoundProvider$audioFormats$delegate$lambda);
  }
  protoOf(NativeSoundProvider).q14 = function (_set____db54di) {
    this.p1y_1 = _set____db54di;
  };
  protoOf(NativeSoundProvider).pm = function () {
  };
  function NativeSoundProviderNew() {
    NativeSoundProvider.call(this);
  }
  function Companion_3() {
    Companion_instance_9 = this;
    DummyNativeSoundProvider.call(this);
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_3();
    return Companion_instance_9;
  }
  function DummyNativeSoundProvider() {
    Companion_getInstance_10();
    NativeSoundProvider.call(this);
  }
  function get_isLow(_this__u8e3s4) {
    return _this__u8e3s4.u17() <= 0.25;
  }
  function Entry(slice, data) {
    this.r1y_1 = slice;
    this.s1y_1 = data;
  }
  protoOf(Entry).toString = function () {
    return 'Entry(slice=' + this.r1y_1 + ', data=' + this.s1y_1 + ')';
  };
  protoOf(Entry).hashCode = function () {
    var result = this.r1y_1.hashCode();
    result = imul(result, 31) + (this.s1y_1 == null ? 0 : hashCode(this.s1y_1)) | 0;
    return result;
  };
  protoOf(Entry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Entry))
      return false;
    var tmp0_other_with_cast = other instanceof Entry ? other : THROW_CCE();
    if (!this.r1y_1.equals(tmp0_other_with_cast.r1y_1))
      return false;
    if (!equals(this.s1y_1, tmp0_other_with_cast.s1y_1))
      return false;
    return true;
  };
  function reconstructWithSize($this, width, height) {
    var slices = toList($this.b1z_1);
    $this.t1y_1 = Companion_instance.k1n(width, height);
    $this.z1y_1 = new Bitmap32(width, height, VOID, $this.v1y_1);
    $this.a1z_1.n2();
    $this.a1z_1.p($this.z1y_1);
    $this.c1z_1.n2();
    $this.b1z_1.n2();
    var tmp0_iterator = slices.s();
    while (tmp0_iterator.t()) {
      var entry = tmp0_iterator.u();
      $this.e1z(entry.r1y_1, entry.s1y_1, entry.r1y_1.p1o_1);
    }
  }
  function growAtlas($this, bmp) {
    var tmp0 = $this.x1y_1.q9_1;
    if (tmp0 === 0) {
      reconstructWithSize($this, imul($this.ex(), 2), imul($this.fx(), 2));
    } else if (tmp0 === 1) {
      if (bmp.u1o_1 > $this.ex() ? true : bmp.v1o_1 > $this.fx()) {
        // Inline function 'kotlin.error' call
        var message = 'Atlas is too small (' + $this.ex() + 'x' + $this.fx() + ') to hold a slice of (' + bmp.u1o_1 + 'x' + bmp.v1o_1 + ')';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      $this.t1y_1 = Companion_instance.k1n($this.ex(), $this.fx());
      $this.z1y_1 = new Bitmap32($this.ex(), $this.fx(), VOID, $this.v1y_1);
      $this.a1z_1.p($this.z1y_1);
    }
  }
  function set_baseMipmapLevel(_this__u8e3s4, _set____db54di) {
    _init_properties_Bitmap_kt__y1ku1b();
    var this_0 = baseMipmapLevel$delegate;
    var property = baseMipmapLevel$factory();
    var tmp0_elvis_lhs = this_0.w14_1;
    var tmp = tmp0_elvis_lhs == null ? property.callableName : tmp0_elvis_lhs;
    // Inline function 'korlibs.datastructure.fastCastTo' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    setExtra(_this__u8e3s4, tmp, _set____db54di);
    return Unit_instance;
  }
  function get_baseMipmapLevel(_this__u8e3s4) {
    _init_properties_Bitmap_kt__y1ku1b();
    var tmp$ret$6;
    $l$block: {
      // Inline function 'korlibs.datastructure.Property.getValue' call
      var this_0 = baseMipmapLevel$delegate;
      var property = baseMipmapLevel$factory_0();
      // Inline function 'korlibs.datastructure.fastCastTo' call
      var tmp1_safe_receiver = _this__u8e3s4.v14();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp0_elvis_lhs = this_0.w14_1;
        tmp = tmp1_safe_receiver.e15(tmp0_elvis_lhs == null ? property.callableName : tmp0_elvis_lhs);
      }
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var res = tmp;
      if (res == null) {
        var r = this_0.x14_1();
        var tmp_0;
        if (!(r == null)) {
          tmp_0 = true;
        } else {
          var tmp2_elvis_lhs = this_0.w14_1;
          tmp_0 = hasExtra(_this__u8e3s4, tmp2_elvis_lhs == null ? property.callableName : tmp2_elvis_lhs);
        }
        if (tmp_0) {
          // Inline function 'korlibs.datastructure.Property.setValue' call
          var tmp0_elvis_lhs_0 = this_0.w14_1;
          var tmp_1 = tmp0_elvis_lhs_0 == null ? property.callableName : tmp0_elvis_lhs_0;
          // Inline function 'korlibs.datastructure.fastCastTo' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          setExtra(_this__u8e3s4, tmp_1, r);
        }
        tmp$ret$6 = r;
        break $l$block;
      }
      tmp$ret$6 = res;
    }
    return tmp$ret$6;
  }
  var baseMipmapLevel$delegate;
  function set_maxMipmapLevel(_this__u8e3s4, _set____db54di) {
    _init_properties_Bitmap_kt__y1ku1b();
    var this_0 = maxMipmapLevel$delegate;
    var property = maxMipmapLevel$factory();
    var tmp0_elvis_lhs = this_0.w14_1;
    var tmp = tmp0_elvis_lhs == null ? property.callableName : tmp0_elvis_lhs;
    // Inline function 'korlibs.datastructure.fastCastTo' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    setExtra(_this__u8e3s4, tmp, _set____db54di);
    return Unit_instance;
  }
  function get_maxMipmapLevel(_this__u8e3s4) {
    _init_properties_Bitmap_kt__y1ku1b();
    var tmp$ret$6;
    $l$block: {
      // Inline function 'korlibs.datastructure.Property.getValue' call
      var this_0 = maxMipmapLevel$delegate;
      var property = maxMipmapLevel$factory_0();
      // Inline function 'korlibs.datastructure.fastCastTo' call
      var tmp1_safe_receiver = _this__u8e3s4.v14();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp0_elvis_lhs = this_0.w14_1;
        tmp = tmp1_safe_receiver.e15(tmp0_elvis_lhs == null ? property.callableName : tmp0_elvis_lhs);
      }
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var res = tmp;
      if (res == null) {
        var r = this_0.x14_1();
        var tmp_0;
        if (!(r == null)) {
          tmp_0 = true;
        } else {
          var tmp2_elvis_lhs = this_0.w14_1;
          tmp_0 = hasExtra(_this__u8e3s4, tmp2_elvis_lhs == null ? property.callableName : tmp2_elvis_lhs);
        }
        if (tmp_0) {
          // Inline function 'korlibs.datastructure.Property.setValue' call
          var tmp0_elvis_lhs_0 = this_0.w14_1;
          var tmp_1 = tmp0_elvis_lhs_0 == null ? property.callableName : tmp0_elvis_lhs_0;
          // Inline function 'korlibs.datastructure.fastCastTo' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          setExtra(_this__u8e3s4, tmp_1, r);
        }
        tmp$ret$6 = r;
        break $l$block;
      }
      tmp$ret$6 = res;
    }
    return tmp$ret$6;
  }
  var maxMipmapLevel$delegate;
  function Bitmap$tempInts$delegate$lambda(this$0) {
    return function () {
      return new Int32Array(imul(this$0.f1z_1, 2));
    };
  }
  function Bitmap(width, height, bpp, premultiplied, backingArray) {
    this.f1z_1 = width;
    this.g1z_1 = height;
    this.h1z_1 = bpp;
    this.i1z_1 = backingArray;
    this.j1z_1 = new Mixin();
    this.k1z_1 = new RectangleI(0, 0, this.f1z_1, this.g1z_1);
    this.l1z_1 = null;
    this.m1z_1 = premultiplied;
    this.n1z_1 = false;
    var tmp = this;
    tmp.o1z_1 = lazy(Bitmap$tempInts$delegate$lambda(this));
    this.p1z_1 = 0;
    this.q1z_1 = null;
    this.r1z_1 = false;
  }
  protoOf(Bitmap).u14 = function (_set____db54di) {
    this.j1z_1.u14(_set____db54di);
  };
  protoOf(Bitmap).v14 = function () {
    return this.j1z_1.v14();
  };
  protoOf(Bitmap).l = function () {
    return new SizeInt(this.f1z_1, this.g1z_1);
  };
  protoOf(Bitmap).s1z = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.o1z_1;
    tempInts$factory();
    return this_0.p3();
  };
  protoOf(Bitmap).t1z = function () {
    return _RgbaArray___init__impl__oib4y4(this.s1z());
  };
  protoOf(Bitmap).i1k = function () {
    return imul(this.f1z_1, this.g1z_1);
  };
  protoOf(Bitmap).u1z = function (x, y) {
    return imul(y, this.f1z_1) + x | 0;
  };
  protoOf(Bitmap).v1z = function () {
    if (!(this.q1z_1 == null)) {
      this.q1z_1 = null;
    }
  };
  protoOf(Bitmap).w1z = function () {
    return Unit_instance;
  };
  protoOf(Bitmap).x1z = function (rect) {
    if (this.q1z_1 == null)
      this.q1z_1 = rect;
    else
      this.q1z_1 = Companion_instance_0.b1k(ensureNotNull(this.q1z_1), rect);
    this.p1z_1 = this.p1z_1 + 1 | 0;
    return this.p1z_1;
  };
  protoOf(Bitmap).y1z = function (x, y, width, height, out, offset) {
    var n = offset;
    var inductionVariable = 0;
    if (inductionVariable < height)
      do {
        var y0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < width)
          do {
            var x0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp2 = n;
            n = tmp2 + 1 | 0;
            out[tmp2] = _RGBA___get_value__impl__hhco8v(this.z1z(x0 + x | 0, y0 + y | 0));
          }
           while (inductionVariable_0 < width);
      }
       while (inductionVariable < height);
  };
  protoOf(Bitmap).a20 = function (x, y, width, height, out, offset) {
    var n = offset;
    var inductionVariable = 0;
    if (inductionVariable < height)
      do {
        var y0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < width)
          do {
            var x0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = x0 + x | 0;
            var tmp_0 = y0 + y | 0;
            var tmp2 = n;
            n = tmp2 + 1 | 0;
            this.b20(tmp, tmp_0, _RGBA___init__impl__lqpay5(out[tmp2]));
          }
           while (inductionVariable_0 < width);
      }
       while (inductionVariable < height);
  };
  protoOf(Bitmap).c20 = function (x, y, width, height, out, offset, $super) {
    offset = offset === VOID ? 0 : offset;
    var tmp;
    if ($super === VOID) {
      this.a20(x, y, width, height, out, offset);
      tmp = Unit_instance;
    } else {
      tmp = $super.a20.call(this, x, y, width, height, out, offset);
    }
    return tmp;
  };
  protoOf(Bitmap).b20 = function (x, y, v) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(Bitmap).z1z = function (x, y) {
    return Colors_getInstance().i20_1;
  };
  protoOf(Bitmap).v25 = function (x, y, color) {
    return Unit_instance;
  };
  protoOf(Bitmap).w25 = function (x, y) {
    return 0;
  };
  protoOf(Bitmap).x25 = function (srcX, srcY, dst, dstX, dstY, width, height) {
    var src = this;
    var srcX0 = src.y25(srcX);
    var srcX1 = src.y25(srcX + width | 0);
    var srcY0 = src.z25(srcY);
    var srcY1 = src.z25(srcY + height | 0);
    var dstX0 = dst.y25(dstX);
    var dstX1 = dst.y25(dstX + width | 0);
    var dstY0 = dst.z25(dstY);
    var dstY1 = dst.z25(dstY + height | 0);
    var srcX_0 = srcX0;
    var srcY_0 = srcY0;
    var dstX_0 = dstX0;
    var dstY_0 = dstY0;
    // Inline function 'kotlin.math.min' call
    var a = srcX1 - srcX0 | 0;
    var b = dstX1 - dstX0 | 0;
    var width_0 = Math.min(a, b);
    // Inline function 'kotlin.math.min' call
    var a_0 = srcY1 - srcY0 | 0;
    var b_0 = dstY1 - dstY0 | 0;
    var height_0 = Math.min(a_0, b_0);
    this.a26(srcX_0, srcY_0, dst, dstX_0, dstY_0, width_0, height_0);
  };
  protoOf(Bitmap).a26 = function (srcX, srcY, dst, dstX, dstY, width, height) {
    var inductionVariable = 0;
    if (inductionVariable < height)
      do {
        var y = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.y1z(srcX, srcY + y | 0, width, 1, this.s1z(), 0);
        dst.a20(dstX, dstY + y | 0, width, 1, this.s1z(), 0);
      }
       while (inductionVariable < height);
  };
  protoOf(Bitmap).y25 = function (x) {
    return clamp(x, 0, this.f1z_1);
  };
  protoOf(Bitmap).z25 = function (y) {
    return clamp(y, 0, this.g1z_1);
  };
  protoOf(Bitmap).b26 = function () {
    var inductionVariable = 0;
    var last = this.g1z_1 / 2 | 0;
    if (inductionVariable < last)
      do {
        var y = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.c26(y, (this.g1z_1 - y | 0) - 1 | 0);
      }
       while (inductionVariable < last);
    return this;
  };
  protoOf(Bitmap).d26 = function () {
    var inductionVariable = 0;
    var last = this.f1z_1 / 2 | 0;
    if (inductionVariable < last)
      do {
        var x = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.e26(x, (this.f1z_1 - x | 0) - 1 | 0);
      }
       while (inductionVariable < last);
    return this;
  };
  protoOf(Bitmap).f26 = function (rotation) {
    var tmp;
    switch (rotation.q9_1) {
      case 0:
        tmp = this.g26();
        break;
      case 1:
        tmp = this.h26().d26();
        break;
      case 2:
        tmp = this.h26().d26().h26().d26();
        break;
      case 3:
        tmp = this.h26().b26();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(Bitmap).i26 = function (orientation) {
    var out = this.g26();
    if (_SliceOrientation___get_flipX__impl__lgb7bx(orientation)) {
      out.d26();
    }
    return out.f26(_SliceOrientation___get_rotation__impl__m65r0o(orientation));
  };
  protoOf(Bitmap).h26 = function () {
    var temp = new IntArray2(this.f1z_1, this.g1z_1, readPixelsUnsafe(this, 0, 0, this.f1z_1, this.g1z_1));
    // Inline function 'korlibs.datastructure.Companion.invoke' call
    var width = this.g1z_1;
    var height = this.f1z_1;
    var tmp = 0;
    var tmp_0 = imul(width, height);
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = 0;
      tmp = tmp + 1 | 0;
    }
    var tmp_2 = tmp_1;
    var out = new IntArray2(width, height, isIntArray(tmp_2) ? tmp_2 : THROW_CCE());
    var inductionVariable = 0;
    var last = this.g1z_1;
    if (inductionVariable < last)
      do {
        var y = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = this.f1z_1;
        if (inductionVariable_0 < last_0)
          do {
            var x = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            out.ix(y, x, temp.hx(x, y));
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.also' call
    var this_0 = this.j26(this.g1z_1, this.f1z_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.image.bitmap.Bitmap.transposed.<anonymous>' call
    this_0.c20(0, 0, this.g1z_1, this.f1z_1, out.cx_1);
    return this_0;
  };
  protoOf(Bitmap).c26 = function (y0, y1) {
    var inductionVariable = 0;
    var last = this.f1z_1;
    if (inductionVariable < last)
      do {
        var x = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c0 = this.w25(x, y0);
        var c1 = this.w25(x, y1);
        this.v25(x, y0, c1);
        this.v25(x, y1, c0);
      }
       while (inductionVariable < last);
  };
  protoOf(Bitmap).e26 = function (x0, x1) {
    var inductionVariable = 0;
    var last = this.g1z_1;
    if (inductionVariable < last)
      do {
        var y = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c0 = this.w25(x0, y);
        var c1 = this.w25(x1, y);
        this.v25(x0, y, c1);
        this.v25(x1, y, c0);
      }
       while (inductionVariable < last);
  };
  protoOf(Bitmap).j26 = function (width, height) {
    invalidOp('Unsupported createWithThisFormat (' + this + ')');
  };
  protoOf(Bitmap).k26 = function () {
    // Inline function 'kotlin.also' call
    var this_0 = new Bitmap32(this.f1z_1, this.g1z_1, VOID, this.m1z_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.image.bitmap.Bitmap.toBMP32.<anonymous>' call
    this.y1z(0, 0, this.f1z_1, this.g1z_1, this_0.y26_1, 0);
    return this_0;
  };
  protoOf(Bitmap).b27 = function () {
    var tmp;
    if (this instanceof Bitmap32) {
      tmp = this;
    } else {
      tmp = this.k26();
    }
    return tmp;
  };
  protoOf(Bitmap).g26 = function () {
    var out = this.j26(this.f1z_1, this.g1z_1);
    this.a26(0, 0, out, 0, 0, this.f1z_1, this.g1z_1);
    return out;
  };
  function readPixelsUnsafe(_this__u8e3s4, x, y, width, height) {
    _init_properties_Bitmap_kt__y1ku1b();
    var out = new Int32Array(imul(width, height));
    _this__u8e3s4.y1z(x, y, width, height, out, 0);
    return out;
  }
  function asumePremultiplied(_this__u8e3s4) {
    _init_properties_Bitmap_kt__y1ku1b();
    _this__u8e3s4.m1z_1 = true;
    _this__u8e3s4.n1z_1 = true;
    return _this__u8e3s4;
  }
  function baseMipmapLevel$delegate$lambda() {
    _init_properties_Bitmap_kt__y1ku1b();
    return null;
  }
  function maxMipmapLevel$delegate$lambda() {
    _init_properties_Bitmap_kt__y1ku1b();
    return null;
  }
  function baseMipmapLevel$factory() {
    return getPropertyCallableRef('baseMipmapLevel', 1, KMutableProperty1, function (receiver) {
      return get_baseMipmapLevel(receiver);
    }, function (receiver, value) {
      return set_baseMipmapLevel(receiver, value);
    });
  }
  function baseMipmapLevel$factory_0() {
    return getPropertyCallableRef('baseMipmapLevel', 1, KMutableProperty1, function (receiver) {
      return get_baseMipmapLevel(receiver);
    }, function (receiver, value) {
      return set_baseMipmapLevel(receiver, value);
    });
  }
  function maxMipmapLevel$factory() {
    return getPropertyCallableRef('maxMipmapLevel', 1, KMutableProperty1, function (receiver) {
      return get_maxMipmapLevel(receiver);
    }, function (receiver, value) {
      return set_maxMipmapLevel(receiver, value);
    });
  }
  function maxMipmapLevel$factory_0() {
    return getPropertyCallableRef('maxMipmapLevel', 1, KMutableProperty1, function (receiver) {
      return get_maxMipmapLevel(receiver);
    }, function (receiver, value) {
      return set_maxMipmapLevel(receiver, value);
    });
  }
  function tempInts$factory() {
    return getPropertyCallableRef('tempInts', 1, KProperty1, function (receiver) {
      return receiver.s1z();
    }, null);
  }
  var properties_initialized_Bitmap_kt_sxrn69;
  function _init_properties_Bitmap_kt__y1ku1b() {
    if (!properties_initialized_Bitmap_kt_sxrn69) {
      properties_initialized_Bitmap_kt_sxrn69 = true;
      baseMipmapLevel$delegate = new Property(VOID, baseMipmapLevel$delegate$lambda);
      maxMipmapLevel$delegate = new Property(VOID, maxMipmapLevel$delegate$lambda);
    }
  }
  function Companion_4() {
    Companion_instance_10 = this;
    this.c27_1 = new Bitmap32(0, 0, VOID, true);
  }
  protoOf(Companion_4).d27 = function (width, height, value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Bitmap32(width, height, VOID, true);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.image.bitmap.Companion.invoke.<anonymous>' call
    fill(this_0.y26_1, _RGBAPremultiplied___get_value__impl__bqfhud(value));
    return this_0;
  };
  protoOf(Companion_4).e27 = function (width, height, premultiplied) {
    return new Bitmap32(width, height, new Int32Array(imul(width, height)), premultiplied);
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_4();
    return Companion_instance_10;
  }
  function Bitmap32$iterator$slambda(this$0, resultContinuation) {
    this.n27_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Bitmap32$iterator$slambda).r27 = function ($this$iterator, $completion) {
    var tmp = this.s27($this$iterator, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(Bitmap32$iterator$slambda).jd = function (p1, $completion) {
    return this.r27(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Bitmap32$iterator$slambda).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            this.p27_1 = until(0, this.n27_1.i1k()).s();
            this.bc_1 = 1;
            continue $sm;
          case 1:
            if (!this.p27_1.t()) {
              this.bc_1 = 3;
              continue $sm;
            }

            this.q27_1 = this.p27_1.u();
            this.bc_1 = 2;
            suspendResult = this.o27_1.xe(new RGBA(this.n27_1.t27(this.q27_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.bc_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 4) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  protoOf(Bitmap32$iterator$slambda).s27 = function ($this$iterator, completion) {
    var i = new Bitmap32$iterator$slambda(this.n27_1, completion);
    i.o27_1 = $this$iterator;
    return i;
  };
  function Bitmap32$iterator$slambda_0(this$0, resultContinuation) {
    var i = new Bitmap32$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.r27($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Bitmap32(width, height, ints, premultiplied) {
    Companion_getInstance_11();
    ints = ints === VOID ? new Int32Array(imul(width, height)) : ints;
    premultiplied = premultiplied === VOID ? true : premultiplied;
    Bitmap.call(this, width, height, 32, premultiplied, ints);
    this.y26_1 = ints;
    if (this.y26_1.length < imul(width, height))
      throw RuntimeException_init_$Create$('Bitmap data is too short: width=' + width + ', height=' + height + ', data=ByteArray(' + this.y26_1.length + '), area=' + imul(width, height));
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$0 = Math.max(width, height);
    tmp.z26_1 = new Int32Array(tmp$ret$0);
    this.a27_1 = new RectangleI(0, 0, width, height);
  }
  protoOf(Bitmap32).j26 = function (width, height) {
    return new Bitmap32(width, height, VOID, this.m1z_1);
  };
  protoOf(Bitmap32).a26 = function (srcX, srcY, dst, dstX, dstY, width, height) {
    if (!(dst instanceof Bitmap32))
      return protoOf(Bitmap).a26.call(this, srcX, srcY, dst, dstX, dstY, width, height);
    var src = this;
    var srcArray = src.y26_1;
    var dstArray = dst.y26_1;
    var inductionVariable = 0;
    if (inductionVariable < height)
      do {
        var y = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        arraycopy(srcArray, src.u1z(srcX, srcY + y | 0), dstArray, dst.u1z(dstX, dstY + y | 0), width);
      }
       while (inductionVariable < height);
  };
  protoOf(Bitmap32).v25 = function (x, y, color) {
    this.y26_1[this.u1z(x, y)] = color;
  };
  protoOf(Bitmap32).w25 = function (x, y) {
    return this.y26_1[this.u1z(x, y)];
  };
  protoOf(Bitmap32).z1z = function (x, y) {
    return _RGBA___init__impl__lqpay5(this.w25(x, y));
  };
  protoOf(Bitmap32).b20 = function (x, y, v) {
    return this.v25(x, y, _RGBA___get_value__impl__hhco8v(v));
  };
  protoOf(Bitmap32).u27 = function (n, color) {
    this.y26_1[n] = this.m1z_1 ? _RGBAPremultiplied___get_value__impl__bqfhud(_RGBA___get_premultiplied__impl__3bulqc(color)) : _RGBA___get_value__impl__hhco8v(color);
  };
  protoOf(Bitmap32).v27 = function (n, color) {
    var tmp;
    if (this.m1z_1) {
      tmp = _RGBAPremultiplied___get_value__impl__bqfhud(color);
    } else {
      // Inline function 'korlibs.image.color.RGBAPremultiplied.depremultiplied' call
      var tmp$ret$0 = _RGBAPremultiplied___get_depremultipliedAccurate__impl__i51glv(color);
      tmp = _RGBA___get_value__impl__hhco8v(tmp$ret$0);
    }
    this.y26_1[n] = tmp;
  };
  protoOf(Bitmap32).t27 = function (n) {
    var tmp;
    if (this.m1z_1) {
      // Inline function 'korlibs.image.color.RGBAPremultiplied.depremultiplied' call
      var this_0 = _RGBAPremultiplied___init__impl__uos02x(this.y26_1[n]);
      tmp = _RGBAPremultiplied___get_depremultipliedAccurate__impl__i51glv(this_0);
    } else {
      tmp = _RGBA___init__impl__lqpay5(this.y26_1[n]);
    }
    return tmp;
  };
  protoOf(Bitmap32).w27 = function (n) {
    return this.m1z_1 ? _RGBAPremultiplied___init__impl__uos02x(this.y26_1[n]) : _RGBA___get_premultiplied__impl__3bulqc(_RGBA___init__impl__lqpay5(this.y26_1[n]));
  };
  protoOf(Bitmap32).x27 = function (src, dx, dy, sleft, stop, sright, sbottom, mix_0) {
    var dst = this;
    var width = sright - sleft | 0;
    var height = sbottom - stop | 0;
    var inductionVariable = 0;
    if (inductionVariable < height)
      do {
        var y = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var dstOffset = dst.u1z(dx, dy + y | 0);
        var srcOffset = src.u1z(sleft, stop + y | 0);
        if (mix_0) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < width)
            do {
              var x = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              dst.v27(dstOffset + x | 0, mix(dst.w27(dstOffset + x | 0), src.w27(srcOffset + x | 0)));
            }
             while (inductionVariable_0 < width);
        } else {
          if (dst.m1z_1 === src.m1z_1) {
            arraycopy(src.y26_1, srcOffset, dst.y26_1, dstOffset, width);
          } else if (!dst.m1z_1) {
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < width)
              do {
                var x_0 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                dst.u27(dstOffset + x_0 | 0, src.t27(srcOffset + x_0 | 0));
              }
               while (inductionVariable_1 < width);
          } else {
            var inductionVariable_2 = 0;
            if (inductionVariable_2 < width)
              do {
                var x_1 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                dst.v27(dstOffset + x_1 | 0, src.w27(srcOffset + x_1 | 0));
              }
               while (inductionVariable_2 < width);
          }
        }
      }
       while (inductionVariable < height);
  };
  protoOf(Bitmap32).y27 = function (src, dx, dy, sleft, stop, sright, sbottom, mix) {
    var sleft_0 = sleft;
    var stop_0 = stop;
    var dx_0 = dx;
    var dy_0 = dy;
    if (dx_0 < 0) {
      sleft_0 = sleft_0 - dx_0 | 0;
      dx_0 = 0;
    }
    if (dy_0 < 0) {
      stop_0 = stop_0 - dy_0 | 0;
      dy_0 = 0;
    }
    var availableWidth = this.f1z_1 - dx_0 | 0;
    var availableHeight = this.g1z_1 - dy_0 | 0;
    // Inline function 'kotlin.math.min' call
    var b = sright - sleft_0 | 0;
    var awidth = Math.min(availableWidth, b);
    // Inline function 'kotlin.math.min' call
    var b_0 = sbottom - stop_0 | 0;
    var aheight = Math.min(availableHeight, b_0);
    this.x27(src, dx_0, dy_0, sleft_0, stop_0, sleft_0 + awidth | 0, stop_0 + aheight | 0, mix);
  };
  protoOf(Bitmap32).z27 = function (src, dx, dy, mix) {
    var b = get_bounds(src);
    this.y27(get_bmp(src), dx, dy, b.o1i(), b.r1i(), b.p1i(), b.q1i(), mix);
  };
  protoOf(Bitmap32).a28 = function (src, dx, dy) {
    return this.z27(src, dx, dy, true);
  };
  protoOf(Bitmap32).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.image.bitmap.Bitmap32.toString.<anonymous>' call
    this_0.f5('Bitmap32(');
    this_0.q7(this.f1z_1);
    this_0.f5(', ');
    this_0.q7(this.g1z_1);
    if (!(this.l1z_1 == null)) {
      this_0.f5(', name=');
      this_0.f5(this.l1z_1);
    }
    this_0.f5(')');
    return this_0.toString();
  };
  protoOf(Bitmap32).c26 = function (y0, y1) {
    var s0 = this.u1z(0, y0);
    var s1 = this.u1z(0, y1);
    arraycopy(this.y26_1, s0, this.z26_1, 0, this.f1z_1);
    arraycopy(this.y26_1, s1, this.y26_1, s0, this.f1z_1);
    arraycopy(this.z26_1, 0, this.y26_1, s1, this.f1z_1);
  };
  protoOf(Bitmap32).g26 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.y26_1.slice();
    return new Bitmap32(this.f1z_1, this.g1z_1, tmp$ret$1, this.m1z_1);
  };
  protoOf(Bitmap32).b28 = function () {
    return this.m1z_1 ? this : this.copyPremultiplied();
  };
  protoOf(Bitmap32).c28 = function () {
    return !this.m1z_1 ? this : this.d28();
  };
  protoOf(Bitmap32).copyPremultiplied = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = this.g26();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.image.bitmap.Bitmap32.premultiplied.<anonymous>' call
    this_0.e28();
    return this_0;
  };
  protoOf(Bitmap32).d28 = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = this.g26();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.image.bitmap.Bitmap32.depremultiplied.<anonymous>' call
    this_0.f28();
    return this_0;
  };
  protoOf(Bitmap32).e28 = function () {
    if (this.m1z_1)
      return Unit_instance;
    this.m1z_1 = true;
    var inductionVariable = 0;
    var last = this.i1k();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.y26_1[n] = _RGBAPremultiplied___get_value__impl__bqfhud(_RGBA___get_premultiplied__impl__3bulqc(_RGBA___init__impl__lqpay5(this.y26_1[n])));
      }
       while (inductionVariable < last);
  };
  protoOf(Bitmap32).f28 = function () {
    if (!this.m1z_1)
      return Unit_instance;
    this.m1z_1 = false;
    var inductionVariable = 0;
    var last = this.i1k();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'korlibs.image.color.RGBAPremultiplied.depremultiplied' call
        var this_0 = _RGBAPremultiplied___init__impl__uos02x(this.y26_1[n]);
        var tmp$ret$0 = _RGBAPremultiplied___get_depremultipliedAccurate__impl__i51glv(this_0);
        this.y26_1[n] = _RGBA___get_value__impl__hhco8v(tmp$ret$0);
      }
       while (inductionVariable < last);
  };
  protoOf(Bitmap32).s = function () {
    return iterator(Bitmap32$iterator$slambda_0(this, null));
  };
  protoOf(Bitmap32).k26 = function () {
    return this;
  };
  function isFullyTransparent(_this__u8e3s4) {
    var bmp = get_bmp(_this__u8e3s4);
    var data = _RgbaArray___init__impl__oib4y4(get_bmp(_this__u8e3s4).y26_1);
    var width = _this__u8e3s4.p1i() - _this__u8e3s4.o1i() | 0;
    var inductionVariable = _this__u8e3s4.r1i();
    var last = _this__u8e3s4.q1i();
    if (inductionVariable < last)
      do {
        var y = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var index = bmp.u1z(_this__u8e3s4.o1i(), y);
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(index >= 0 ? index <= (_RgbaArray___get_size__impl__imxef8(data) - width | 0) : false)) {
          // Inline function 'korlibs.image.bitmap.isFullyTransparent.<anonymous>' call
          var message = 'left=' + _this__u8e3s4.o1i() + ', top=' + _this__u8e3s4.r1i() + ', right=' + _this__u8e3s4.p1i() + ', bottom=' + _this__u8e3s4.q1i();
          throw IllegalStateException_init_$Create$(toString(message));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < width)
          do {
            var n = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!(_RGBA___get_a__impl__6msvu7(RgbaArray__get_impl_nzyo1o(data, index + n | 0)) === 0))
              return false;
          }
           while (inductionVariable_0 < width);
      }
       while (inductionVariable < last);
    return true;
  }
  function expandBorder(_this__u8e3s4, area, border) {
    return expandBorder_0(_this__u8e3s4, area.r1i(), area.o1i(), area.q1i(), area.p1i(), border);
  }
  function expandBorder_0(_this__u8e3s4, areaTop, areaLeft, areaBottom, areaRight, border) {
    var data = _this__u8e3s4.y26_1;
    var x0Index = _this__u8e3s4.u1z(areaLeft, areaTop);
    var x1Index = _this__u8e3s4.u1z(areaRight - 1 | 0, areaTop);
    var areaWidth = areaRight - areaLeft | 0;
    var areaHeight = areaBottom - areaTop | 0;
    var inductionVariable = 0;
    if (inductionVariable < areaHeight)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var x0Color = data[x0Index];
        var x1Color = data[x1Index];
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < border)
          do {
            var m = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            data[(x0Index - m | 0) - 1 | 0] = x0Color;
            data[(x1Index + m | 0) + 1 | 0] = x1Color;
          }
           while (inductionVariable_0 < border);
        x0Index = x0Index + _this__u8e3s4.f1z_1 | 0;
        x1Index = x1Index + _this__u8e3s4.f1z_1 | 0;
      }
       while (inductionVariable < areaHeight);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < border)
      do {
        var m_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var x = areaLeft - border | 0;
        var npixels = areaWidth + imul(border, 2) | 0;
        arraycopy(data, _this__u8e3s4.u1z(x, areaTop), data, _this__u8e3s4.u1z(x, (areaTop - m_0 | 0) - 1 | 0), npixels);
        arraycopy(data, _this__u8e3s4.u1z(x, areaBottom - 1 | 0), data, _this__u8e3s4.u1z(x, areaBottom + m_0 | 0), npixels);
      }
       while (inductionVariable_1 < border);
  }
  function Bitmap8() {
  }
  function BitmapIndexed() {
  }
  protoOf(BitmapIndexed).u28 = function () {
    return this.t28_1;
  };
  function get_bounds(_this__u8e3s4) {
    return _this__u8e3s4.m1o_1;
  }
  function get_bmp(_this__u8e3s4) {
    return get_container(_this__u8e3s4);
  }
  function get_container(_this__u8e3s4) {
    return _this__u8e3s4.u1p();
  }
  function slice(_this__u8e3s4, bounds, name, orientation, padding) {
    bounds = bounds === VOID ? new RectangleI(0, 0, _this__u8e3s4.f1z_1, _this__u8e3s4.g1z_1) : bounds;
    name = name === VOID ? null : name;
    orientation = orientation === VOID ? Companion_getInstance().b1o_1 : orientation;
    padding = padding === VOID ? Companion_getInstance_0().c1e_1 : padding;
    var left = clamp(bounds.o1i(), 0, _this__u8e3s4.f1z_1);
    var top = clamp(bounds.r1i(), 0, _this__u8e3s4.g1z_1);
    return new RectSlice(_this__u8e3s4, Companion_instance_0.c1j(left, top, clamp(bounds.p1i(), left, _this__u8e3s4.f1z_1), clamp(bounds.q1i(), top, _this__u8e3s4.g1z_1)), orientation, padding, name);
  }
  function extract_0(_this__u8e3s4) {
    var w = !_SliceOrientation___get_isRotatedDeg90CwOrCcw__impl__98v1vq(_this__u8e3s4.n1o_1) ? _this__u8e3s4.m1o_1.e1k_1 : _this__u8e3s4.m1o_1.f1k_1;
    var h = !_SliceOrientation___get_isRotatedDeg90CwOrCcw__impl__98v1vq(_this__u8e3s4.n1o_1) ? _this__u8e3s4.m1o_1.f1k_1 : _this__u8e3s4.m1o_1.e1k_1;
    var tmp = get_container(_this__u8e3s4).j26(w + _this__u8e3s4.o1o_1.i1e() | 0, h + _this__u8e3s4.o1o_1.j1e() | 0);
    var out = tmp instanceof Bitmap ? tmp : THROW_CCE();
    var raw = extractUntransformed(_this__u8e3s4).i26(_this__u8e3s4.n1o_1);
    raw.a26(0, 0, out, _this__u8e3s4.o1o_1.g1e_1, _this__u8e3s4.o1o_1.d1e_1, raw.f1z_1, raw.g1z_1);
    return out;
  }
  function sliceWithSize(_this__u8e3s4, x, y, width, height, name, orientation, padding) {
    name = name === VOID ? null : name;
    orientation = orientation === VOID ? Companion_getInstance().b1o_1 : orientation;
    padding = padding === VOID ? Companion_getInstance_0().c1e_1 : padding;
    return slice(_this__u8e3s4, new RectangleI(x, y, width, height), name, orientation, padding);
  }
  function extractUntransformed(_this__u8e3s4) {
    var tmp = get_container(_this__u8e3s4).j26(_this__u8e3s4.m1o_1.e1k_1, _this__u8e3s4.m1o_1.f1k_1);
    var out = tmp instanceof Bitmap ? tmp : THROW_CCE();
    get_container(_this__u8e3s4).x25(_this__u8e3s4.m1o_1.c1k_1, _this__u8e3s4.m1o_1.d1k_1, out, 0, 0, _this__u8e3s4.m1o_1.e1k_1, _this__u8e3s4.m1o_1.f1k_1);
    return out;
  }
  function get_Bitmaps_transparent() {
    _init_properties_Bitmaps_kt__92w93i();
    return Bitmaps_transparent;
  }
  var Bitmaps_transparent;
  function get_Bitmaps_white() {
    _init_properties_Bitmaps_kt__92w93i();
    return Bitmaps_white;
  }
  var Bitmaps_white;
  function Bitmaps() {
  }
  var Bitmaps_instance;
  function Bitmaps_getInstance() {
    return Bitmaps_instance;
  }
  var properties_initialized_Bitmaps_kt_qcuk18;
  function _init_properties_Bitmaps_kt__92w93i() {
    if (!properties_initialized_Bitmaps_kt_qcuk18) {
      properties_initialized_Bitmaps_kt_qcuk18 = true;
      Bitmaps_transparent = slice(Companion_getInstance_11().d27(1, 1, _RGBA___get_premultiplied__impl__3bulqc(Colors_getInstance().i20_1)), VOID, 'transparent');
      Bitmaps_white = slice(Companion_getInstance_11().d27(1, 1, _RGBA___get_premultiplied__impl__3bulqc(Colors_getInstance().d20_1)), VOID, 'white');
    }
  }
  function FloatBitmap32() {
  }
  function MultiBitmap() {
  }
  function NativeImage(width, height, data, premultiplied) {
    Bitmap.call(this, width, height, 32, premultiplied, null);
    this.i29_1 = data;
  }
  protoOf(NativeImage).k26 = function () {
    // Inline function 'kotlin.also' call
    var this_0 = Companion_getInstance_11().e27(this.f1z_1, this.g1z_1, this.m1z_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.image.bitmap.NativeImage.toBMP32.<anonymous>' call
    this.y1z(0, 0, this.f1z_1, this.g1z_1, this_0.y26_1, 0);
    return this_0;
  };
  protoOf(NativeImage).b20 = function (x, y, v) {
    RgbaArray__set_impl_epw2wg(this.t1z(), 0, v);
    this.a20(x, y, 1, 1, this.s1z(), 0);
  };
  protoOf(NativeImage).z1z = function (x, y) {
    this.y1z(x, y, 1, 1, this.s1z(), 0);
    return RgbaArray__get_impl_nzyo1o(this.t1z(), 0);
  };
  protoOf(NativeImage).v25 = function (x, y, color) {
    return this.b20(x, y, _RGBA___init__impl__lqpay5(color));
  };
  protoOf(NativeImage).w25 = function (x, y) {
    return _RGBA___get_value__impl__hhco8v(this.z1z(x, y));
  };
  protoOf(NativeImage).b26 = function () {
    var tmp = this.k26().b26();
    this.c20(0, 0, this.f1z_1, this.g1z_1, (tmp instanceof Bitmap32 ? tmp : THROW_CCE()).y26_1);
    return this;
  };
  protoOf(NativeImage).d26 = function () {
    var tmp = this.k26().d26();
    this.c20(0, 0, this.f1z_1, this.g1z_1, (tmp instanceof Bitmap32 ? tmp : THROW_CCE()).y26_1);
    return this;
  };
  protoOf(NativeImage).c26 = function (y0, y1) {
    this.y1z(0, y0, this.f1z_1, 1, this.s1z(), 0);
    this.y1z(0, y1, this.f1z_1, 1, this.s1z(), this.f1z_1);
    this.a20(0, y1, this.f1z_1, 1, this.s1z(), 0);
    this.a20(0, y0, this.f1z_1, 1, this.s1z(), this.f1z_1);
  };
  protoOf(NativeImage).e26 = function (x0, x1) {
    this.y1z(x0, 0, 1, this.g1z_1, this.s1z(), 0);
    this.y1z(x1, 0, 1, this.g1z_1, this.s1z(), this.f1z_1);
    this.a20(x1, 0, 1, this.g1z_1, this.s1z(), 0);
    this.a20(x0, 0, 1, this.g1z_1, this.s1z(), this.f1z_1);
  };
  protoOf(NativeImage).j26 = function (width, height) {
    return NativeImage_0(width, height);
  };
  protoOf(NativeImage).toString = function () {
    return this.fb() + '(' + this.f1z_1 + ', ' + this.g1z_1 + ')';
  };
  function NativeImage_0(width, height, premultiplied) {
    premultiplied = premultiplied === VOID ? null : premultiplied;
    return get_nativeImageFormatProvider().j29(width, height, premultiplied);
  }
  function ForcedTexId() {
  }
  function NullBitmap(width, height, premultiplied) {
    premultiplied = premultiplied === VOID ? true : premultiplied;
    Bitmap.call(this, width, height, 32, premultiplied, null);
  }
  function ColorFormat32() {
    this.l29_1 = 32;
  }
  function ColorTransformMul(_r, _g, _b, _a) {
    _r = _r === VOID ? 1.0 : _r;
    _g = _g === VOID ? 1.0 : _g;
    _b = _b === VOID ? 1.0 : _b;
    _a = _a === VOID ? 1.0 : _a;
    this.m29_1 = _r;
    this.n29_1 = _g;
    this.o29_1 = _b;
    this.p29_1 = _a;
    this.q29_1 = true;
    this.r29_1 = Colors_getInstance().d20_1;
  }
  protoOf(ColorTransformMul).s29 = function () {
    return this.m29_1;
  };
  protoOf(ColorTransformMul).t29 = function () {
    return this.n29_1;
  };
  protoOf(ColorTransformMul).u29 = function () {
    return this.o29_1;
  };
  protoOf(ColorTransformMul).v29 = function (value) {
    this.p29_1 = value;
    this.q29_1 = true;
  };
  protoOf(ColorTransformMul).w29 = function () {
    return this.p29_1;
  };
  protoOf(ColorTransformMul).x29 = function (v) {
    this.y29(_RGBA___get_rf__impl__kvz75k(v), _RGBA___get_gf__impl__5gcu1f(v), _RGBA___get_bf__impl__1xz5yg(v), _RGBA___get_af__impl__vu36qv(v));
    this.r29_1 = v;
    this.q29_1 = false;
  };
  protoOf(ColorTransformMul).z29 = function () {
    if (this.q29_1) {
      this.q29_1 = false;
      this.r29_1 = Companion_getInstance_12().f2a(this.m29_1, this.n29_1, this.o29_1, this.p29_1);
    }
    return this.r29_1;
  };
  protoOf(ColorTransformMul).y29 = function (r, g, b, a) {
    this.m29_1 = r;
    this.n29_1 = g;
    this.o29_1 = b;
    this.p29_1 = a;
    this.q29_1 = true;
  };
  protoOf(ColorTransformMul).g2a = function (other) {
    return this.y29(other.m29_1, other.n29_1, other.o29_1, other.p29_1);
  };
  protoOf(ColorTransformMul).h2a = function (a, b) {
    return this.y29(a.s29() * b.s29(), a.t29() * b.t29(), a.u29() * b.u29(), a.w29() * b.w29());
  };
  protoOf(ColorTransformMul).toString = function () {
    return 'ColorTransformMul(_r=' + this.m29_1 + ', _g=' + this.n29_1 + ', _b=' + this.o29_1 + ', _a=' + this.p29_1 + ')';
  };
  protoOf(ColorTransformMul).hashCode = function () {
    var result = getNumberHashCode(this.m29_1);
    result = imul(result, 31) + getNumberHashCode(this.n29_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o29_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p29_1) | 0;
    return result;
  };
  protoOf(ColorTransformMul).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorTransformMul))
      return false;
    var tmp0_other_with_cast = other instanceof ColorTransformMul ? other : THROW_CCE();
    if (!equals(this.m29_1, tmp0_other_with_cast.m29_1))
      return false;
    if (!equals(this.n29_1, tmp0_other_with_cast.n29_1))
      return false;
    if (!equals(this.o29_1, tmp0_other_with_cast.o29_1))
      return false;
    if (!equals(this.p29_1, tmp0_other_with_cast.p29_1))
      return false;
    return true;
  };
  function Colors() {
    Colors_instance = this;
    this.d20_1 = Companion_getInstance_12().i2a(255, 255, 255, 255);
    this.e20_1 = Companion_getInstance_12().i2a(0, 0, 0, 255);
    this.f20_1 = Companion_getInstance_12().i2a(255, 0, 0, 255);
    this.g20_1 = Companion_getInstance_12().i2a(0, 255, 0, 255);
    this.h20_1 = Companion_getInstance_12().i2a(0, 0, 255, 255);
    this.i20_1 = Companion_getInstance_12().i2a(0, 0, 0, 0);
    this.j20_1 = Companion_getInstance_12().i2a(255, 255, 255, 0);
    this.k20_1 = Companion_getInstance_12().j2a(240, 248, 255);
    this.l20_1 = Companion_getInstance_12().j2a(250, 235, 215);
    this.m20_1 = Companion_getInstance_12().j2a(0, 255, 255);
    this.n20_1 = Companion_getInstance_12().j2a(127, 255, 212);
    this.o20_1 = Companion_getInstance_12().j2a(240, 255, 255);
    this.p20_1 = Companion_getInstance_12().j2a(245, 245, 220);
    this.q20_1 = Companion_getInstance_12().j2a(255, 228, 196);
    this.r20_1 = Companion_getInstance_12().j2a(255, 235, 205);
    this.s20_1 = Companion_getInstance_12().j2a(138, 43, 226);
    this.t20_1 = Companion_getInstance_12().j2a(165, 42, 42);
    this.u20_1 = Companion_getInstance_12().j2a(222, 184, 135);
    this.v20_1 = Companion_getInstance_12().j2a(95, 158, 160);
    this.w20_1 = Companion_getInstance_12().j2a(127, 255, 0);
    this.x20_1 = Companion_getInstance_12().j2a(210, 105, 30);
    this.y20_1 = Companion_getInstance_12().j2a(255, 127, 80);
    this.z20_1 = Companion_getInstance_12().j2a(100, 149, 237);
    this.a21_1 = Companion_getInstance_12().j2a(255, 248, 220);
    this.b21_1 = Companion_getInstance_12().j2a(220, 20, 60);
    this.c21_1 = Companion_getInstance_12().j2a(0, 0, 139);
    this.d21_1 = Companion_getInstance_12().j2a(0, 255, 255);
    this.e21_1 = Companion_getInstance_12().j2a(0, 139, 139);
    this.f21_1 = Companion_getInstance_12().j2a(184, 134, 11);
    this.g21_1 = Companion_getInstance_12().j2a(169, 169, 169);
    this.h21_1 = Companion_getInstance_12().j2a(0, 100, 0);
    this.i21_1 = Companion_getInstance_12().j2a(169, 169, 169);
    this.j21_1 = Companion_getInstance_12().j2a(189, 183, 107);
    this.k21_1 = Companion_getInstance_12().j2a(255, 0, 255);
    this.l21_1 = Companion_getInstance_12().j2a(139, 0, 139);
    this.m21_1 = Companion_getInstance_12().j2a(85, 107, 47);
    this.n21_1 = Companion_getInstance_12().j2a(255, 140, 0);
    this.o21_1 = Companion_getInstance_12().j2a(153, 50, 204);
    this.p21_1 = Companion_getInstance_12().j2a(139, 0, 0);
    this.q21_1 = Companion_getInstance_12().j2a(233, 150, 122);
    this.r21_1 = Companion_getInstance_12().j2a(143, 188, 143);
    this.s21_1 = Companion_getInstance_12().j2a(72, 61, 139);
    this.t21_1 = Companion_getInstance_12().j2a(47, 79, 79);
    this.u21_1 = Companion_getInstance_12().j2a(47, 79, 79);
    this.v21_1 = Companion_getInstance_12().j2a(0, 206, 209);
    this.w21_1 = Companion_getInstance_12().j2a(148, 0, 211);
    this.x21_1 = Companion_getInstance_12().j2a(255, 20, 147);
    this.y21_1 = Companion_getInstance_12().j2a(0, 191, 255);
    this.z21_1 = Companion_getInstance_12().j2a(105, 105, 105);
    this.a22_1 = Companion_getInstance_12().j2a(105, 105, 105);
    this.b22_1 = Companion_getInstance_12().j2a(30, 144, 255);
    this.c22_1 = Companion_getInstance_12().j2a(178, 34, 34);
    this.d22_1 = Companion_getInstance_12().j2a(255, 250, 240);
    this.e22_1 = Companion_getInstance_12().j2a(34, 139, 34);
    this.f22_1 = Companion_getInstance_12().j2a(255, 0, 255);
    this.g22_1 = Companion_getInstance_12().j2a(220, 220, 220);
    this.h22_1 = Companion_getInstance_12().j2a(248, 248, 255);
    this.i22_1 = Companion_getInstance_12().j2a(255, 215, 0);
    this.j22_1 = Companion_getInstance_12().j2a(218, 165, 32);
    this.k22_1 = Companion_getInstance_12().j2a(173, 255, 47);
    this.l22_1 = Companion_getInstance_12().j2a(240, 255, 240);
    this.m22_1 = Companion_getInstance_12().j2a(255, 105, 180);
    this.n22_1 = Companion_getInstance_12().j2a(205, 92, 92);
    this.o22_1 = Companion_getInstance_12().j2a(75, 0, 130);
    this.p22_1 = Companion_getInstance_12().j2a(255, 255, 240);
    this.q22_1 = Companion_getInstance_12().j2a(240, 230, 140);
    this.r22_1 = Companion_getInstance_12().j2a(230, 230, 250);
    this.s22_1 = Companion_getInstance_12().j2a(255, 240, 245);
    this.t22_1 = Companion_getInstance_12().j2a(124, 252, 0);
    this.u22_1 = Companion_getInstance_12().j2a(255, 250, 205);
    this.v22_1 = Companion_getInstance_12().j2a(173, 216, 230);
    this.w22_1 = Companion_getInstance_12().j2a(240, 128, 128);
    this.x22_1 = Companion_getInstance_12().j2a(224, 255, 255);
    this.y22_1 = Companion_getInstance_12().j2a(250, 250, 210);
    this.z22_1 = Companion_getInstance_12().j2a(211, 211, 211);
    this.a23_1 = Companion_getInstance_12().j2a(144, 238, 144);
    this.b23_1 = Companion_getInstance_12().j2a(211, 211, 211);
    this.c23_1 = Companion_getInstance_12().j2a(255, 182, 193);
    this.d23_1 = Companion_getInstance_12().j2a(255, 160, 122);
    this.e23_1 = Companion_getInstance_12().j2a(32, 178, 170);
    this.f23_1 = Companion_getInstance_12().j2a(135, 206, 250);
    this.g23_1 = Companion_getInstance_12().j2a(119, 136, 153);
    this.h23_1 = Companion_getInstance_12().j2a(119, 136, 153);
    this.i23_1 = Companion_getInstance_12().j2a(176, 196, 222);
    this.j23_1 = Companion_getInstance_12().j2a(255, 255, 224);
    this.k23_1 = Companion_getInstance_12().j2a(0, 255, 0);
    this.l23_1 = Companion_getInstance_12().j2a(50, 205, 50);
    this.m23_1 = Companion_getInstance_12().j2a(250, 240, 230);
    this.n23_1 = Companion_getInstance_12().j2a(128, 0, 0);
    this.o23_1 = Companion_getInstance_12().j2a(102, 205, 170);
    this.p23_1 = Companion_getInstance_12().j2a(0, 0, 205);
    this.q23_1 = Companion_getInstance_12().j2a(186, 85, 211);
    this.r23_1 = Companion_getInstance_12().j2a(147, 112, 219);
    this.s23_1 = Companion_getInstance_12().j2a(60, 179, 113);
    this.t23_1 = Companion_getInstance_12().j2a(123, 104, 238);
    this.u23_1 = Companion_getInstance_12().j2a(0, 250, 154);
    this.v23_1 = Companion_getInstance_12().j2a(72, 209, 204);
    this.w23_1 = Companion_getInstance_12().j2a(199, 21, 133);
    this.x23_1 = Companion_getInstance_12().j2a(25, 25, 112);
    this.y23_1 = Companion_getInstance_12().j2a(245, 255, 250);
    this.z23_1 = Companion_getInstance_12().j2a(255, 228, 225);
    this.a24_1 = Companion_getInstance_12().j2a(255, 228, 181);
    this.b24_1 = Companion_getInstance_12().j2a(255, 222, 173);
    this.c24_1 = Companion_getInstance_12().j2a(0, 0, 128);
    this.d24_1 = Companion_getInstance_12().j2a(253, 245, 230);
    this.e24_1 = Companion_getInstance_12().j2a(128, 128, 0);
    this.f24_1 = Companion_getInstance_12().j2a(107, 142, 35);
    this.g24_1 = Companion_getInstance_12().j2a(255, 165, 0);
    this.h24_1 = Companion_getInstance_12().j2a(255, 69, 0);
    this.i24_1 = Companion_getInstance_12().j2a(218, 112, 214);
    this.j24_1 = Companion_getInstance_12().j2a(238, 232, 170);
    this.k24_1 = Companion_getInstance_12().j2a(152, 251, 152);
    this.l24_1 = Companion_getInstance_12().j2a(175, 238, 238);
    this.m24_1 = Companion_getInstance_12().j2a(219, 112, 147);
    this.n24_1 = Companion_getInstance_12().j2a(255, 239, 213);
    this.o24_1 = Companion_getInstance_12().j2a(255, 218, 185);
    this.p24_1 = Companion_getInstance_12().j2a(205, 133, 63);
    this.q24_1 = Companion_getInstance_12().j2a(255, 192, 203);
    this.r24_1 = Companion_getInstance_12().j2a(221, 160, 221);
    this.s24_1 = Companion_getInstance_12().j2a(176, 224, 230);
    this.t24_1 = Companion_getInstance_12().j2a(128, 0, 128);
    this.u24_1 = Companion_getInstance_12().j2a(188, 143, 143);
    this.v24_1 = Companion_getInstance_12().j2a(65, 105, 225);
    this.w24_1 = Companion_getInstance_12().j2a(139, 69, 19);
    this.x24_1 = Companion_getInstance_12().j2a(250, 128, 114);
    this.y24_1 = Companion_getInstance_12().j2a(244, 164, 96);
    this.z24_1 = Companion_getInstance_12().j2a(46, 139, 87);
    this.a25_1 = Companion_getInstance_12().j2a(255, 245, 238);
    this.b25_1 = Companion_getInstance_12().j2a(160, 82, 45);
    this.c25_1 = Companion_getInstance_12().j2a(192, 192, 192);
    this.d25_1 = Companion_getInstance_12().j2a(135, 206, 235);
    this.e25_1 = Companion_getInstance_12().j2a(106, 90, 205);
    this.f25_1 = Companion_getInstance_12().j2a(112, 128, 144);
    this.g25_1 = Companion_getInstance_12().j2a(112, 128, 144);
    this.h25_1 = Companion_getInstance_12().j2a(255, 250, 250);
    this.i25_1 = Companion_getInstance_12().j2a(0, 255, 127);
    this.j25_1 = Companion_getInstance_12().j2a(70, 130, 180);
    this.k25_1 = Companion_getInstance_12().j2a(210, 180, 140);
    this.l25_1 = Companion_getInstance_12().j2a(0, 128, 128);
    this.m25_1 = Companion_getInstance_12().j2a(216, 191, 216);
    this.n25_1 = Companion_getInstance_12().j2a(255, 99, 71);
    this.o25_1 = Companion_getInstance_12().j2a(64, 224, 208);
    this.p25_1 = Companion_getInstance_12().j2a(238, 130, 238);
    this.q25_1 = Companion_getInstance_12().j2a(245, 222, 179);
    this.r25_1 = Companion_getInstance_12().j2a(245, 245, 245);
    this.s25_1 = Companion_getInstance_12().j2a(154, 205, 50);
    this.t25_1 = Companion_getInstance_12().j2a(255, 255, 0);
    this.u25_1 = mapOf([to('black', new RGBA(this.e20_1)), to('white', new RGBA(this.d20_1)), to('red', new RGBA(this.f20_1)), to('green', new RGBA(this.g20_1)), to('blue', new RGBA(this.h20_1)), to('aliceblue', new RGBA(this.k20_1)), to('antiquewhite', new RGBA(this.l20_1)), to('aqua', new RGBA(this.m20_1)), to('aquamarine', new RGBA(this.n20_1)), to('azure', new RGBA(this.o20_1)), to('beige', new RGBA(this.p20_1)), to('bisque', new RGBA(this.q20_1)), to('blanchedalmond', new RGBA(this.r20_1)), to('blueviolet', new RGBA(this.s20_1)), to('brown', new RGBA(this.t20_1)), to('burlywood', new RGBA(this.u20_1)), to('cadetblue', new RGBA(this.v20_1)), to('chartreuse', new RGBA(this.w20_1)), to('chocolate', new RGBA(this.x20_1)), to('coral', new RGBA(this.y20_1)), to('cornflowerblue', new RGBA(this.z20_1)), to('cornsilk', new RGBA(this.a21_1)), to('crimson', new RGBA(this.b21_1)), to('cyan', new RGBA(this.d21_1)), to('darkblue', new RGBA(this.c21_1)), to('darkcyan', new RGBA(this.e21_1)), to('darkgoldenrod', new RGBA(this.f21_1)), to('darkgray', new RGBA(this.g21_1)), to('darkgreen', new RGBA(this.h21_1)), to('darkgrey', new RGBA(this.i21_1)), to('darkkhaki', new RGBA(this.j21_1)), to('darkmagenta', new RGBA(this.l21_1)), to('darkolivegreen', new RGBA(this.m21_1)), to('darkorange', new RGBA(this.n21_1)), to('darkorchid', new RGBA(this.o21_1)), to('darkred', new RGBA(this.p21_1)), to('darksalmon', new RGBA(this.q21_1)), to('darkseagreen', new RGBA(this.r21_1)), to('darkslateblue', new RGBA(this.s21_1)), to('darkslategray', new RGBA(this.t21_1)), to('darkslategrey', new RGBA(this.u21_1)), to('darkturquoise', new RGBA(this.v21_1)), to('darkviolet', new RGBA(this.w21_1)), to('deeppink', new RGBA(this.x21_1)), to('deepskyblue', new RGBA(this.y21_1)), to('dimgray', new RGBA(this.z21_1)), to('dimgrey', new RGBA(this.a22_1)), to('dodgerblue', new RGBA(this.b22_1)), to('firebrick', new RGBA(this.c22_1)), to('floralwhite', new RGBA(this.d22_1)), to('forestgreen', new RGBA(this.e22_1)), to('fuchsia', new RGBA(this.f22_1)), to('gainsboro', new RGBA(this.g22_1)), to('ghostwhite', new RGBA(this.h22_1)), to('gold', new RGBA(this.i22_1)), to('goldenrod', new RGBA(this.j22_1)), to('greenyellow', new RGBA(this.k22_1)), to('honeydew', new RGBA(this.l22_1)), to('hotpink', new RGBA(this.m22_1)), to('indianred', new RGBA(this.n22_1)), to('indigo', new RGBA(this.o22_1)), to('ivory', new RGBA(this.p22_1)), to('khaki', new RGBA(this.q22_1)), to('lavender', new RGBA(this.r22_1)), to('lavenderblush', new RGBA(this.s22_1)), to('lawngreen', new RGBA(this.t22_1)), to('lemonchiffon', new RGBA(this.u22_1)), to('lightblue', new RGBA(this.v22_1)), to('lightcoral', new RGBA(this.w22_1)), to('lightcyan', new RGBA(this.x22_1)), to('lightgoldenrodyellow', new RGBA(this.y22_1)), to('lightgray', new RGBA(this.z22_1)), to('lightgreen', new RGBA(this.a23_1)), to('lightgrey', new RGBA(this.b23_1)), to('lightpink', new RGBA(this.c23_1)), to('lightsalmon', new RGBA(this.d23_1)), to('lightseagreen', new RGBA(this.e23_1)), to('lightskyblue', new RGBA(this.f23_1)), to('lightslategray', new RGBA(this.g23_1)), to('lightslategrey', new RGBA(this.h23_1)), to('lightsteelblue', new RGBA(this.i23_1)), to('lightyellow', new RGBA(this.j23_1)), to('lime', new RGBA(this.k23_1)), to('limegreen', new RGBA(this.l23_1)), to('linen', new RGBA(this.m23_1)), to('magenta', new RGBA(this.k21_1)), to('maroon', new RGBA(this.n23_1)), to('mediumaquamarine', new RGBA(this.o23_1)), to('mediumblue', new RGBA(this.p23_1)), to('mediumorchid', new RGBA(this.q23_1)), to('mediumpurple', new RGBA(this.r23_1)), to('mediumseagreen', new RGBA(this.s23_1)), to('mediumslateblue', new RGBA(this.t23_1)), to('mediumspringgreen', new RGBA(this.u23_1)), to('mediumturquoise', new RGBA(this.v23_1)), to('mediumvioletred', new RGBA(this.w23_1)), to('midnightblue', new RGBA(this.x23_1)), to('mintcream', new RGBA(this.y23_1)), to('mistyrose', new RGBA(this.z23_1)), to('moccasin', new RGBA(this.a24_1)), to('navajowhite', new RGBA(this.b24_1)), to('navy', new RGBA(this.c24_1)), to('oldlace', new RGBA(this.d24_1)), to('olive', new RGBA(this.e24_1)), to('olivedrab', new RGBA(this.f24_1)), to('orange', new RGBA(this.g24_1)), to('orangered', new RGBA(this.h24_1)), to('orchid', new RGBA(this.i24_1)), to('palegoldenrod', new RGBA(this.j24_1)), to('palegreen', new RGBA(this.k24_1)), to('paleturquoise', new RGBA(this.l24_1)), to('palevioletred', new RGBA(this.m24_1)), to('papayawhip', new RGBA(this.n24_1)), to('peachpuff', new RGBA(this.o24_1)), to('peru', new RGBA(this.p24_1)), to('pink', new RGBA(this.q24_1)), to('plum', new RGBA(this.r24_1)), to('powderblue', new RGBA(this.s24_1)), to('purple', new RGBA(this.t24_1)), to('rosybrown', new RGBA(this.u24_1)), to('royalblue', new RGBA(this.v24_1)), to('saddlebrown', new RGBA(this.w24_1)), to('salmon', new RGBA(this.x24_1)), to('sandybrown', new RGBA(this.y24_1)), to('seagreen', new RGBA(this.z24_1)), to('seashell', new RGBA(this.a25_1)), to('sienna', new RGBA(this.b25_1)), to('silver', new RGBA(this.c25_1)), to('skyblue', new RGBA(this.d25_1)), to('slateblue', new RGBA(this.e25_1)), to('slategray', new RGBA(this.f25_1)), to('slategrey', new RGBA(this.g25_1)), to('snow', new RGBA(this.h25_1)), to('springgreen', new RGBA(this.i25_1)), to('steelblue', new RGBA(this.j25_1)), to('tan', new RGBA(this.k25_1)), to('teal', new RGBA(this.l25_1)), to('thistle', new RGBA(this.m25_1)), to('tomato', new RGBA(this.n25_1)), to('turquoise', new RGBA(this.o25_1)), to('violet', new RGBA(this.p25_1)), to('wheat', new RGBA(this.q25_1)), to('whitesmoke', new RGBA(this.r25_1)), to('yellowgreen', new RGBA(this.s25_1)), to('yellow', new RGBA(this.t25_1))]);
  }
  protoOf(Colors).k2a = function (str) {
    return this.l2a(str, this.i20_1, true);
  };
  protoOf(Colors).l2a = function (str, default_0, errorOnDefault) {
    try {
      if (startsWith(str, '#')) {
        var hex = substr(str, 1);
        if (!setOf([3, 4, 6, 8]).v(hex.length))
          return this.e20_1;
        var chars = hex.length < 6 ? 1 : 2;
        var scale = hex.length < 6 ? 17.0 : 1.0;
        var hasAlpha = (hex.length / chars | 0) >= 4;
        var r = numberToInt(toInt(substr_0(hex, imul(0, chars), chars), 16) * scale);
        var g = numberToInt(toInt(substr_0(hex, imul(1, chars), chars), 16) * scale);
        var b = numberToInt(toInt(substr_0(hex, imul(2, chars), chars), 16) * scale);
        var a = hasAlpha ? numberToInt(toInt(substr_0(hex, imul(3, chars), chars), 16) * scale) : 255;
        return Companion_getInstance_12().i2a(r, g, b, a);
      } else if (startsWith(str, 'RGBA(', true)) {
        // Inline function 'kotlin.text.toUpperCase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = str.toUpperCase();
        var parts = split(removeSuffix(removePrefix(tmp$ret$1, 'RGBA('), ')'), [',']);
        // Inline function 'kotlin.collections.getOrElse' call
        var tmp;
        if (0 >= 0 ? 0 <= get_lastIndex(parts) : false) {
          tmp = parts.b1(0);
        } else {
          // Inline function 'korlibs.image.color.Colors.get.<anonymous>' call
          tmp = '0';
        }
        var tmp$ret$3 = tmp;
        var tmp0_elvis_lhs = toIntOrNull(tmp$ret$3);
        var r_0 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
        // Inline function 'kotlin.collections.getOrElse' call
        var tmp_0;
        if (1 >= 0 ? 1 <= get_lastIndex(parts) : false) {
          tmp_0 = parts.b1(1);
        } else {
          // Inline function 'korlibs.image.color.Colors.get.<anonymous>' call
          tmp_0 = '0';
        }
        var tmp$ret$5 = tmp_0;
        var tmp1_elvis_lhs = toIntOrNull(tmp$ret$5);
        var g_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        // Inline function 'kotlin.collections.getOrElse' call
        var tmp_1;
        if (2 >= 0 ? 2 <= get_lastIndex(parts) : false) {
          tmp_1 = parts.b1(2);
        } else {
          // Inline function 'korlibs.image.color.Colors.get.<anonymous>' call
          tmp_1 = '0';
        }
        var tmp$ret$7 = tmp_1;
        var tmp2_elvis_lhs = toIntOrNull(tmp$ret$7);
        var b_0 = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
        // Inline function 'kotlin.collections.getOrElse' call
        var tmp_2;
        if (3 >= 0 ? 3 <= get_lastIndex(parts) : false) {
          tmp_2 = parts.b1(3);
        } else {
          // Inline function 'korlibs.image.color.Colors.get.<anonymous>' call
          tmp_2 = '1.0';
        }
        var tmp$ret$9 = tmp_2;
        var tmp3_elvis_lhs = toDoubleOrNull(tmp$ret$9);
        var af = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
        return Companion_getInstance_12().i2a(r_0, g_0, b_0, numberToInt(af * 255));
      } else {
        // Inline function 'kotlin.text.toLowerCase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$11 = str.toLowerCase();
        var tmp_3 = this.u25_1.d2(tmp$ret$11);
        var col = tmp_3 == null ? null : tmp_3.m2a_1;
        var tmp_4;
        var tmp_5 = col;
        if ((tmp_5 == null ? null : new RGBA(tmp_5)) == null) {
          tmp_4 = errorOnDefault;
        } else {
          tmp_4 = false;
        }
        if (tmp_4)
          return this.n2a('#' + str, default_0);
        var tmp_6;
        var tmp_7 = col;
        if ((tmp_7 == null ? null : new RGBA(tmp_7)) == null) {
          tmp_6 = default_0;
        } else {
          tmp_6 = col;
        }
        return tmp_6;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        printStackTrace(e);
        return Colors_getInstance().f20_1;
      } else {
        throw $p;
      }
    }
  };
  protoOf(Colors).n2a = function (str, default_0, errorOnDefault, $super) {
    errorOnDefault = errorOnDefault === VOID ? false : errorOnDefault;
    return $super === VOID ? this.l2a(str, default_0, errorOnDefault) : $super.l2a.call(this, str, new RGBA(default_0), errorOnDefault).m2a_1;
  };
  var Colors_instance;
  function Colors_getInstance() {
    if (Colors_instance == null)
      new Colors();
    return Colors_instance;
  }
  function _RgbaArray___init__impl__oib4y4(ints) {
    return ints;
  }
  function _RgbaArray___get_ints__impl__u2kps1($this) {
    return $this;
  }
  function _RgbaArray___get_size__impl__imxef8($this) {
    return _RgbaArray___get_ints__impl__u2kps1($this).length;
  }
  function RgbaArray__get_impl_nzyo1o($this, index) {
    return _RGBA___init__impl__lqpay5(_RgbaArray___get_ints__impl__u2kps1($this)[index]);
  }
  function RgbaArray__set_impl_epw2wg($this, index, color) {
    _RgbaArray___get_ints__impl__u2kps1($this)[index] = _RGBA___get_value__impl__hhco8v(color);
  }
  function _RGBA___init__impl__lqpay5(value) {
    return value;
  }
  function _RGBA___get_value__impl__hhco8v($this) {
    return $this;
  }
  function _RGBA___get_r__impl__duz7mo($this) {
    // Inline function 'korlibs.memory.extract8' call
    return (_RGBA___get_value__impl__hhco8v($this) >>> 0 | 0) & 255;
  }
  function _RGBA___get_g__impl__o8pukr($this) {
    // Inline function 'korlibs.memory.extract8' call
    return (_RGBA___get_value__impl__hhco8v($this) >>> 8 | 0) & 255;
  }
  function _RGBA___get_b__impl__m6tl80($this) {
    // Inline function 'korlibs.memory.extract8' call
    return (_RGBA___get_value__impl__hhco8v($this) >>> 16 | 0) & 255;
  }
  function _RGBA___get_a__impl__6msvu7($this) {
    // Inline function 'korlibs.memory.extract8' call
    return (_RGBA___get_value__impl__hhco8v($this) >>> 24 | 0) & 255;
  }
  function _RGBA___get_rf__impl__kvz75k($this) {
    return _RGBA___get_r__impl__duz7mo($this) / 255.0;
  }
  function _RGBA___get_gf__impl__5gcu1f($this) {
    return _RGBA___get_g__impl__o8pukr($this) / 255.0;
  }
  function _RGBA___get_bf__impl__1xz5yg($this) {
    return _RGBA___get_b__impl__m6tl80($this) / 255.0;
  }
  function _RGBA___get_af__impl__vu36qv($this) {
    return _RGBA___get_a__impl__6msvu7($this) / 255.0;
  }
  function _RGBA___get_rgb__impl__tijaqt($this) {
    return _RGBA___get_value__impl__hhco8v($this) & 16777215;
  }
  function RGBA__withA_impl_vogscm($this, v) {
    return _RGBA___init__impl__lqpay5(_RGBA___get_value__impl__hhco8v($this) & 16777215 | clampUByte(v) << 24);
  }
  function RGBA__withAd_impl_cralao($this, v) {
    return RGBA__withA_impl_vogscm($this, d2i(v));
  }
  function _RGBA___get_hexString__impl__kocngm($this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.image.color.RGBA.<get-hexString>.<anonymous>' call
    this_0.g5(_Char___init__impl__6a9atx(35));
    appendHexByte(this_0, _RGBA___get_r__impl__duz7mo($this));
    appendHexByte(this_0, _RGBA___get_g__impl__o8pukr($this));
    appendHexByte(this_0, _RGBA___get_b__impl__m6tl80($this));
    appendHexByte(this_0, _RGBA___get_a__impl__6msvu7($this));
    return this_0.toString();
  }
  function RGBA__toString_impl_4lw6dp($this) {
    return _RGBA___get_hexString__impl__kocngm($this);
  }
  function RGBA__compareTo_impl_lrfjc1($this, other) {
    return compareTo(_RGBA___get_value__impl__hhco8v($this), _RGBA___get_value__impl__hhco8v(other));
  }
  function RGBA__compareTo_impl_lrfjc1_0($this, other) {
    return RGBA__compareTo_impl_lrfjc1($this.m2a_1, other instanceof RGBA ? other.m2a_1 : THROW_CCE());
  }
  function _RGBA___get_premultiplied__impl__3bulqc($this) {
    return _RGBA___get_premultipliedFast__impl__qiau4g($this);
  }
  function _RGBA___get_premultipliedFast__impl__qiau4g($this) {
    var A = _RGBA___get_a__impl__6msvu7($this) + 1 | 0;
    if (A >= 255)
      return _RGBAPremultiplied___init__impl__uos02x(_RGBA___get_value__impl__hhco8v($this));
    if (A <= 1)
      return _RGBAPremultiplied___init__impl__uos02x(0);
    var RB = (imul(_RGBA___get_value__impl__hhco8v($this) & 16711935, A) >>> 8 | 0) & 16711935;
    var G = (imul(_RGBA___get_value__impl__hhco8v($this) & 65280, A) >>> 8 | 0) & 65280;
    return _RGBAPremultiplied___init__impl__uos02x(_RGBA___get_value__impl__hhco8v($this) & -16777216 | RB | G);
  }
  function Companion_5() {
    Companion_instance_11 = this;
    ColorFormat32.call(this);
    this.b2a_1 = 0;
    this.c2a_1 = 8;
    this.d2a_1 = 16;
    this.e2a_1 = 24;
  }
  protoOf(Companion_5).f2a = function (r, g, b, a) {
    return this.o2a(f2i(r), f2i(g), f2i(b), f2i(a));
  };
  protoOf(Companion_5).o2a = function (r, g, b, a) {
    return _RGBA___init__impl__lqpay5(packIntUnchecked(r, g, b, a));
  };
  protoOf(Companion_5).i2a = function (r, g, b, a) {
    return _RGBA___init__impl__lqpay5(packIntClamped(r, g, b, a));
  };
  protoOf(Companion_5).j2a = function (r, g, b) {
    return _RGBA___init__impl__lqpay5(packIntClamped(r, g, b, 255));
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_5();
    return Companion_instance_11;
  }
  function RGBA__hashCode_impl_h59qf6($this) {
    return $this;
  }
  function RGBA__equals_impl_4vjmca($this, other) {
    if (!(other instanceof RGBA))
      return false;
    if (!($this === (other instanceof RGBA ? other.m2a_1 : THROW_CCE())))
      return false;
    return true;
  }
  function RGBA(value) {
    Companion_getInstance_12();
    this.m2a_1 = value;
  }
  protoOf(RGBA).toString = function () {
    return RGBA__toString_impl_4lw6dp(this.m2a_1);
  };
  protoOf(RGBA).p2a = function (other) {
    return RGBA__compareTo_impl_lrfjc1(this.m2a_1, other);
  };
  protoOf(RGBA).d = function (other) {
    return RGBA__compareTo_impl_lrfjc1_0(this, other);
  };
  protoOf(RGBA).hashCode = function () {
    return RGBA__hashCode_impl_h59qf6(this.m2a_1);
  };
  protoOf(RGBA).equals = function (other) {
    return RGBA__equals_impl_4vjmca(this.m2a_1, other);
  };
  function _RGBAPremultiplied___init__impl__uos02x(value) {
    return value;
  }
  function _RGBAPremultiplied___get_value__impl__bqfhud($this) {
    return $this;
  }
  function _RGBAPremultiplied___init__impl__uos02x_0(r, g, b, a) {
    return _RGBAPremultiplied___init__impl__uos02x(packIntClamped(r, g, b, a));
  }
  function _RGBAPremultiplied___get_r__impl__m8nz5i($this) {
    return (_RGBAPremultiplied___get_value__impl__bqfhud($this) >>> 0 | 0) & 255;
  }
  function _RGBAPremultiplied___get_g__impl__fv131x($this) {
    return (_RGBAPremultiplied___get_value__impl__bqfhud($this) >>> 8 | 0) & 255;
  }
  function _RGBAPremultiplied___get_b__impl__dt4tp6($this) {
    return (_RGBAPremultiplied___get_value__impl__bqfhud($this) >>> 16 | 0) & 255;
  }
  function _RGBAPremultiplied___get_a__impl__f0hnd1($this) {
    return (_RGBAPremultiplied___get_value__impl__bqfhud($this) >>> 24 | 0) & 255;
  }
  function _RGBAPremultiplied___get_af__impl__euwcjn($this) {
    return _RGBAPremultiplied___get_a__impl__f0hnd1($this) / 255.0;
  }
  function _RGBAPremultiplied___get_depremultipliedAccurate__impl__i51glv($this) {
    var alpha = _RGBAPremultiplied___get_a__impl__f0hnd1($this);
    var tmp;
    if (alpha === 0) {
      tmp = Colors_getInstance().i20_1;
    } else {
      var ialpha = 255.0 / alpha;
      tmp = Companion_getInstance_12().i2a(numberToInt(_RGBAPremultiplied___get_r__impl__m8nz5i($this) * ialpha), numberToInt(_RGBAPremultiplied___get_g__impl__fv131x($this) * ialpha), numberToInt(_RGBAPremultiplied___get_b__impl__dt4tp6($this) * ialpha), alpha);
    }
    return tmp;
  }
  function mix(_this__u8e3s4, src) {
    var dst = _this__u8e3s4;
    var srcAf = _RGBAPremultiplied___get_af__impl__euwcjn(src);
    var oneMSrcAf = 1.0 - srcAf;
    var outA = numberToInt(_RGBAPremultiplied___get_a__impl__f0hnd1(src) + _RGBAPremultiplied___get_a__impl__f0hnd1(dst) * oneMSrcAf);
    var outR = numberToInt(_RGBAPremultiplied___get_r__impl__m8nz5i(src) + _RGBAPremultiplied___get_r__impl__m8nz5i(dst) * oneMSrcAf);
    var outG = numberToInt(_RGBAPremultiplied___get_g__impl__fv131x(src) + _RGBAPremultiplied___get_g__impl__fv131x(dst) * oneMSrcAf);
    var outB = numberToInt(_RGBAPremultiplied___get_b__impl__dt4tp6(src) + _RGBAPremultiplied___get_b__impl__dt4tp6(dst) * oneMSrcAf);
    return _RGBAPremultiplied___init__impl__uos02x_0(outR, outG, outB, outA);
  }
  function _RgbaPremultipliedArray___init__impl__lx83hy(ints) {
    return ints;
  }
  function _RgbaPremultipliedArray___get_ints__impl__i1gpd7($this) {
    return $this;
  }
  function RgbaPremultipliedArray__get_impl_1u69ta($this, index) {
    return _RGBAPremultiplied___init__impl__uos02x(_RgbaPremultipliedArray___get_ints__impl__i1gpd7($this)[index]);
  }
  function RgbaPremultipliedArray__set_impl_7fwbby($this, index, color) {
    _RgbaPremultipliedArray___get_ints__impl__i1gpd7($this)[index] = _RGBAPremultiplied___get_value__impl__bqfhud(color);
  }
  function premultiply(src, srcN, dst, dstN, count) {
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        RgbaPremultipliedArray__set_impl_7fwbby(dst, dstN + n | 0, _RGBA___get_premultiplied__impl__3bulqc(RgbaArray__get_impl_nzyo1o(src, srcN + n | 0)));
      }
       while (inductionVariable < count);
  }
  function depremultiply(src, srcN, dst, dstN, count) {
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = dstN + n | 0;
        // Inline function 'korlibs.image.color.RGBAPremultiplied.depremultiplied' call
        var this_0 = RgbaPremultipliedArray__get_impl_1u69ta(src, srcN + n | 0);
        var tmp$ret$0 = _RGBAPremultiplied___get_depremultipliedAccurate__impl__i51glv(this_0);
        RgbaArray__set_impl_epw2wg(dst, tmp, tmp$ret$0);
      }
       while (inductionVariable < count);
  }
  function Companion_6() {
  }
  protoOf(Companion_6).q2a = function (f, s) {
    return insert(insert(0, f, 0, 16), s, 16, 16);
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function BitmapFont$Glyph$bmp$delegate$lambda(this$0) {
    return function () {
      return extract_0(this$0.t2a_1).k26();
    };
  }
  function Companion_7() {
  }
  var Companion_instance_13;
  function Companion_getInstance_14() {
    return Companion_instance_13;
  }
  function Glyph(fontSize, id, texture, xoffset, yoffset, xadvance) {
    this.r2a_1 = fontSize;
    this.s2a_1 = id;
    this.t2a_1 = texture;
    this.u2a_1 = xoffset;
    this.v2a_1 = yoffset;
    this.w2a_1 = xadvance;
    var tmp = this;
    tmp.x2a_1 = lazy(BitmapFont$Glyph$bmp$delegate$lambda(this));
    this.y2a_1 = new GlyphMetrics(this.r2a_1, true, -1, Companion_getInstance_1().x1i(this.u2a_1, this.v2a_1, this.t2a_1.u1o_1, this.t2a_1.v1o_1), this.w2a_1);
  }
  protoOf(Glyph).toString = function () {
    return 'Glyph(fontSize=' + this.r2a_1 + ', id=' + this.s2a_1 + ', texture=' + this.t2a_1 + ', xoffset=' + this.u2a_1 + ', yoffset=' + this.v2a_1 + ', xadvance=' + this.w2a_1 + ')';
  };
  protoOf(Glyph).hashCode = function () {
    var result = getNumberHashCode(this.r2a_1);
    result = imul(result, 31) + this.s2a_1 | 0;
    result = imul(result, 31) + this.t2a_1.hashCode() | 0;
    result = imul(result, 31) + this.u2a_1 | 0;
    result = imul(result, 31) + this.v2a_1 | 0;
    result = imul(result, 31) + this.w2a_1 | 0;
    return result;
  };
  protoOf(Glyph).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Glyph))
      return false;
    var tmp0_other_with_cast = other instanceof Glyph ? other : THROW_CCE();
    if (!equals(this.r2a_1, tmp0_other_with_cast.r2a_1))
      return false;
    if (!(this.s2a_1 === tmp0_other_with_cast.s2a_1))
      return false;
    if (!this.t2a_1.equals(tmp0_other_with_cast.t2a_1))
      return false;
    if (!(this.u2a_1 === tmp0_other_with_cast.u2a_1))
      return false;
    if (!(this.v2a_1 === tmp0_other_with_cast.v2a_1))
      return false;
    if (!(this.w2a_1 === tmp0_other_with_cast.w2a_1))
      return false;
    return true;
  };
  function BitmapFont() {
  }
  function BitmapFontImpl$naturalFontMetrics$delegate$lambda(this$0) {
    return function () {
      var ascent = this$0.f2b_1;
      var baseline = 0.0;
      var tmp = -this$0.l2b_1;
      var tmp_0 = -this$0.l2b_1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.image.font.BitmapFontImpl.naturalFontMetrics$delegate.<anonymous>.<anonymous>' call
      var width = 0.0;
      var tmp0_iterator = this$0.g2b_1.w1().s();
      while (tmp0_iterator.t()) {
        var glyph = tmp0_iterator.u();
        if (!(glyph == null)) {
          // Inline function 'kotlin.math.max' call
          var a = width;
          var b = glyph.t2a_1.u1o_1;
          width = Math.max(a, b);
        }
      }
      var tmp$ret$2 = width;
      return new FontMetrics(this$0.d2b_1, ascent, ascent, baseline, tmp, tmp_0, 0.0, tmp$ret$2);
    };
  }
  function BitmapFontImpl$anyGlyph$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.g2b_1.b1(this$0.g2b_1.v1().s().u());
      return tmp0_elvis_lhs == null ? this$0.q2b() : tmp0_elvis_lhs;
    };
  }
  function BitmapFontImpl$invalidGlyph$delegate$lambda(this$0) {
    return function () {
      // Inline function 'korlibs.image.bitmap.Bitmaps.transparent' call
      var tmp$ret$0 = get_Bitmaps_transparent();
      return new Glyph(this$0.d2b_1, -1, tmp$ret$0, 0, 0, 0);
    };
  }
  function BitmapFontImpl(fontSize, lineHeight, base, glyphs, kernings, name, distanceField) {
    name = name === VOID ? 'BitmapFont' : name;
    distanceField = distanceField === VOID ? null : distanceField;
    this.d2b_1 = fontSize;
    this.e2b_1 = lineHeight;
    this.f2b_1 = base;
    this.g2b_1 = glyphs;
    this.h2b_1 = kernings;
    this.i2b_1 = name;
    this.j2b_1 = distanceField;
    this.k2b_1 = new Mixin();
    this.l2b_1 = this.e2b_1 - this.f2b_1;
    var tmp = this;
    tmp.m2b_1 = lazy(BitmapFontImpl$naturalFontMetrics$delegate$lambda(this));
    this.n2b_1 = new GlyphMetrics(this.d2b_1, false, 0, Companion_getInstance_1().n1e(), 0.0);
    var tmp_0 = this;
    tmp_0.o2b_1 = lazy(BitmapFontImpl$anyGlyph$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.p2b_1 = lazy(BitmapFontImpl$invalidGlyph$delegate$lambda(this));
  }
  protoOf(BitmapFontImpl).z2a = function () {
    return this.d2b_1;
  };
  protoOf(BitmapFontImpl).a2b = function () {
    return this.h2b_1;
  };
  protoOf(BitmapFontImpl).u14 = function (_set____db54di) {
    this.k2b_1.u14(_set____db54di);
  };
  protoOf(BitmapFontImpl).v14 = function () {
    return this.k2b_1.v14();
  };
  protoOf(BitmapFontImpl).r2b = function () {
    return this;
  };
  protoOf(BitmapFontImpl).c2b = function (codePoint) {
    return this.g2b_1.b1(codePoint);
  };
  protoOf(BitmapFontImpl).b2b = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.o2b_1;
    anyGlyph$factory();
    return this_0.p3();
  };
  protoOf(BitmapFontImpl).q2b = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.p2b_1;
    invalidGlyph$factory();
    return this_0.p3();
  };
  function anyGlyph$factory() {
    return getPropertyCallableRef('anyGlyph', 1, KProperty1, function (receiver) {
      return receiver.b2b();
    }, null);
  }
  function invalidGlyph$factory() {
    return getPropertyCallableRef('invalidGlyph', 1, KProperty1, function (receiver) {
      return receiver.q2b();
    }, null);
  }
  var DefaultTtfFontOrNull;
  var SystemFontRegistryOrNull;
  function FontMetrics(size, top, ascent, baseline, descent, bottom, lineGap, maxWidth, unitsPerEm) {
    size = size === VOID ? 0.0 : size;
    top = top === VOID ? 0.0 : top;
    ascent = ascent === VOID ? 0.0 : ascent;
    baseline = baseline === VOID ? 0.0 : baseline;
    descent = descent === VOID ? 0.0 : descent;
    bottom = bottom === VOID ? 0.0 : bottom;
    lineGap = lineGap === VOID ? 0.0 : lineGap;
    maxWidth = maxWidth === VOID ? 0.0 : maxWidth;
    unitsPerEm = unitsPerEm === VOID ? 0.0 : unitsPerEm;
    this.s2b_1 = size;
    this.t2b_1 = top;
    this.u2b_1 = ascent;
    this.v2b_1 = baseline;
    this.w2b_1 = descent;
    this.x2b_1 = bottom;
    this.y2b_1 = lineGap;
    this.z2b_1 = maxWidth;
    this.a2c_1 = unitsPerEm;
  }
  protoOf(FontMetrics).b2c = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.u2b_1;
    var b = this.t2b_1;
    return Math.max(a, b);
  };
  protoOf(FontMetrics).c2c = function () {
    // Inline function 'kotlin.math.min' call
    var a = this.w2b_1;
    var b = this.x2b_1;
    return Math.min(a, b);
  };
  protoOf(FontMetrics).d2c = function () {
    return this.b2c() - this.c2c();
  };
  protoOf(FontMetrics).e2c = function () {
    return this.d2c() + this.y2b_1;
  };
  protoOf(FontMetrics).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.image.font.FontMetrics.toString.<anonymous>' call
    this_0.f5('FontMetrics(');
    this_0.f5('size=' + niceStr(this.s2b_1, 1) + ', ');
    this_0.f5('top=' + niceStr(this.t2b_1, 1) + ', ');
    this_0.f5('ascent=' + niceStr(this.u2b_1, 1) + ', ');
    this_0.f5('baseline=' + niceStr(this.v2b_1, 1) + ', ');
    this_0.f5('descent=' + niceStr(this.w2b_1, 1) + ', ');
    this_0.f5('bottom=' + niceStr(this.x2b_1, 1) + ', ');
    this_0.f5('lineGap=' + niceStr(this.y2b_1, 1) + ', ');
    this_0.f5('unitsPerEm=' + niceStr(this.a2c_1, 1) + ', ');
    this_0.f5('maxWidth=' + niceStr(this.z2b_1, 1) + ', ');
    this_0.f5('lineHeight=' + niceStr(this.e2c(), 1));
    this_0.f5(')');
    return this_0.toString();
  };
  protoOf(FontMetrics).hashCode = function () {
    var result = getNumberHashCode(this.s2b_1);
    result = imul(result, 31) + getNumberHashCode(this.t2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z2b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a2c_1) | 0;
    return result;
  };
  protoOf(FontMetrics).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    var tmp0_other_with_cast = other instanceof FontMetrics ? other : THROW_CCE();
    if (!equals(this.s2b_1, tmp0_other_with_cast.s2b_1))
      return false;
    if (!equals(this.t2b_1, tmp0_other_with_cast.t2b_1))
      return false;
    if (!equals(this.u2b_1, tmp0_other_with_cast.u2b_1))
      return false;
    if (!equals(this.v2b_1, tmp0_other_with_cast.v2b_1))
      return false;
    if (!equals(this.w2b_1, tmp0_other_with_cast.w2b_1))
      return false;
    if (!equals(this.x2b_1, tmp0_other_with_cast.x2b_1))
      return false;
    if (!equals(this.y2b_1, tmp0_other_with_cast.y2b_1))
      return false;
    if (!equals(this.z2b_1, tmp0_other_with_cast.z2b_1))
      return false;
    if (!equals(this.a2c_1, tmp0_other_with_cast.a2c_1))
      return false;
    return true;
  };
  function GlyphMetrics(size, existing, codePoint, bounds, xadvance) {
    size = size === VOID ? 0.0 : size;
    existing = existing === VOID ? false : existing;
    codePoint = codePoint === VOID ? 0 : codePoint;
    bounds = bounds === VOID ? Companion_getInstance_1().n1e() : bounds;
    xadvance = xadvance === VOID ? 0.0 : xadvance;
    this.f2c_1 = size;
    this.g2c_1 = existing;
    this.h2c_1 = codePoint;
    this.i2c_1 = bounds;
    this.j2c_1 = xadvance;
  }
  protoOf(GlyphMetrics).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.image.font.GlyphMetrics.toString.<anonymous>' call
    this_0.f5('GlyphMetrics(');
    this_0.f5('codePoint=' + this.h2c_1 + " ('" + toString_0(numberToChar(this.h2c_1)) + "'), ");
    this_0.f5('existing=' + this.g2c_1 + ', ');
    this_0.f5('xadvance=' + roundToInt(this.j2c_1) + ', ');
    this_0.f5('bounds=' + this.i2c_1.qa());
    this_0.f5(')');
    return this_0.toString();
  };
  protoOf(GlyphMetrics).hashCode = function () {
    var result = getNumberHashCode(this.f2c_1);
    result = imul(result, 31) + getBooleanHashCode(this.g2c_1) | 0;
    result = imul(result, 31) + this.h2c_1 | 0;
    result = imul(result, 31) + this.i2c_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.j2c_1) | 0;
    return result;
  };
  protoOf(GlyphMetrics).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GlyphMetrics))
      return false;
    var tmp0_other_with_cast = other instanceof GlyphMetrics ? other : THROW_CCE();
    if (!equals(this.f2c_1, tmp0_other_with_cast.f2c_1))
      return false;
    if (!(this.g2c_1 === tmp0_other_with_cast.g2c_1))
      return false;
    if (!(this.h2c_1 === tmp0_other_with_cast.h2c_1))
      return false;
    if (!this.i2c_1.equals(tmp0_other_with_cast.i2c_1))
      return false;
    if (!equals(this.j2c_1, tmp0_other_with_cast.j2c_1))
      return false;
    return true;
  };
  var _nativeSystemFontProvider;
  function Companion_8() {
    Companion_instance_14 = this;
    this.k2c_1 = new ImageDecodingProps(VOID, VOID, VOID, true);
    this.l2c_1 = new ImageDecodingProps(VOID, VOID, VOID, true);
    this.m2c_1 = new ImageDecodingProps(VOID, VOID, VOID, false);
  }
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_8();
    return Companion_instance_14;
  }
  function ImageDecodingProps(filename, width, height, premultiplied, asumePremultiplied, requestedMaxSize, debug, preferKotlinDecoder, tryNativeDecode, format, out, extra) {
    Companion_getInstance_15();
    filename = filename === VOID ? 'unknown' : filename;
    width = width === VOID ? null : width;
    height = height === VOID ? null : height;
    premultiplied = premultiplied === VOID ? null : premultiplied;
    asumePremultiplied = asumePremultiplied === VOID ? false : asumePremultiplied;
    requestedMaxSize = requestedMaxSize === VOID ? null : requestedMaxSize;
    debug = debug === VOID ? false : debug;
    preferKotlinDecoder = preferKotlinDecoder === VOID ? false : preferKotlinDecoder;
    tryNativeDecode = tryNativeDecode === VOID ? true : tryNativeDecode;
    format = format === VOID ? get_RegisteredImageFormats() : format;
    out = out === VOID ? null : out;
    extra = extra === VOID ? null : extra;
    this.n2c_1 = filename;
    this.o2c_1 = width;
    this.p2c_1 = height;
    this.q2c_1 = premultiplied;
    this.r2c_1 = asumePremultiplied;
    this.s2c_1 = requestedMaxSize;
    this.t2c_1 = debug;
    this.u2c_1 = preferKotlinDecoder;
    this.v2c_1 = tryNativeDecode;
    this.w2c_1 = format;
    this.x2c_1 = out;
    this.y2c_1 = extra;
  }
  protoOf(ImageDecodingProps).u14 = function (_set____db54di) {
    this.y2c_1 = _set____db54di;
  };
  protoOf(ImageDecodingProps).v14 = function () {
    return this.y2c_1;
  };
  protoOf(ImageDecodingProps).z2c = function () {
    return this;
  };
  protoOf(ImageDecodingProps).a2d = function () {
    var tmp0_elvis_lhs = this.q2c_1;
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  };
  protoOf(ImageDecodingProps).b2d = function (filename) {
    return this.c2d(filename);
  };
  protoOf(ImageDecodingProps).d2d = function (file) {
    return this.b2d(get_baseName(file));
  };
  protoOf(ImageDecodingProps).e2d = function (filename, width, height, premultiplied, asumePremultiplied, requestedMaxSize, debug, preferKotlinDecoder, tryNativeDecode, format, out, extra) {
    return new ImageDecodingProps(filename, width, height, premultiplied, asumePremultiplied, requestedMaxSize, debug, preferKotlinDecoder, tryNativeDecode, format, out, extra);
  };
  protoOf(ImageDecodingProps).c2d = function (filename, width, height, premultiplied, asumePremultiplied, requestedMaxSize, debug, preferKotlinDecoder, tryNativeDecode, format, out, extra, $super) {
    filename = filename === VOID ? this.n2c_1 : filename;
    width = width === VOID ? this.o2c_1 : width;
    height = height === VOID ? this.p2c_1 : height;
    premultiplied = premultiplied === VOID ? this.q2c_1 : premultiplied;
    asumePremultiplied = asumePremultiplied === VOID ? this.r2c_1 : asumePremultiplied;
    requestedMaxSize = requestedMaxSize === VOID ? this.s2c_1 : requestedMaxSize;
    debug = debug === VOID ? this.t2c_1 : debug;
    preferKotlinDecoder = preferKotlinDecoder === VOID ? this.u2c_1 : preferKotlinDecoder;
    tryNativeDecode = tryNativeDecode === VOID ? this.v2c_1 : tryNativeDecode;
    format = format === VOID ? this.w2c_1 : format;
    out = out === VOID ? this.x2c_1 : out;
    extra = extra === VOID ? this.y2c_1 : extra;
    return $super === VOID ? this.e2d(filename, width, height, premultiplied, asumePremultiplied, requestedMaxSize, debug, preferKotlinDecoder, tryNativeDecode, format, out, extra) : $super.e2d.call(this, filename, width, height, premultiplied, asumePremultiplied, requestedMaxSize, debug, preferKotlinDecoder, tryNativeDecode, format, out, extra);
  };
  protoOf(ImageDecodingProps).toString = function () {
    return 'ImageDecodingProps(filename=' + this.n2c_1 + ', width=' + this.o2c_1 + ', height=' + this.p2c_1 + ', premultiplied=' + this.q2c_1 + ', asumePremultiplied=' + this.r2c_1 + ', requestedMaxSize=' + this.s2c_1 + ', debug=' + this.t2c_1 + ', preferKotlinDecoder=' + this.u2c_1 + ', tryNativeDecode=' + this.v2c_1 + ', format=' + this.w2c_1 + ', out=' + this.x2c_1 + ', extra=' + this.y2c_1 + ')';
  };
  protoOf(ImageDecodingProps).hashCode = function () {
    var result = getStringHashCode(this.n2c_1);
    result = imul(result, 31) + (this.o2c_1 == null ? 0 : this.o2c_1) | 0;
    result = imul(result, 31) + (this.p2c_1 == null ? 0 : this.p2c_1) | 0;
    result = imul(result, 31) + (this.q2c_1 == null ? 0 : getBooleanHashCode(this.q2c_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.r2c_1) | 0;
    result = imul(result, 31) + (this.s2c_1 == null ? 0 : this.s2c_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.t2c_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.u2c_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.v2c_1) | 0;
    result = imul(result, 31) + (this.w2c_1 == null ? 0 : hashCode(this.w2c_1)) | 0;
    result = imul(result, 31) + (this.x2c_1 == null ? 0 : hashCode(this.x2c_1)) | 0;
    result = imul(result, 31) + (this.y2c_1 == null ? 0 : hashCode(this.y2c_1)) | 0;
    return result;
  };
  protoOf(ImageDecodingProps).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImageDecodingProps))
      return false;
    var tmp0_other_with_cast = other instanceof ImageDecodingProps ? other : THROW_CCE();
    if (!(this.n2c_1 === tmp0_other_with_cast.n2c_1))
      return false;
    if (!(this.o2c_1 == tmp0_other_with_cast.o2c_1))
      return false;
    if (!(this.p2c_1 == tmp0_other_with_cast.p2c_1))
      return false;
    if (!(this.q2c_1 == tmp0_other_with_cast.q2c_1))
      return false;
    if (!(this.r2c_1 === tmp0_other_with_cast.r2c_1))
      return false;
    if (!(this.s2c_1 == tmp0_other_with_cast.s2c_1))
      return false;
    if (!(this.t2c_1 === tmp0_other_with_cast.t2c_1))
      return false;
    if (!(this.u2c_1 === tmp0_other_with_cast.u2c_1))
      return false;
    if (!(this.v2c_1 === tmp0_other_with_cast.v2c_1))
      return false;
    if (!equals(this.w2c_1, tmp0_other_with_cast.w2c_1))
      return false;
    if (!equals(this.x2c_1, tmp0_other_with_cast.x2c_1))
      return false;
    if (!equals(this.y2c_1, tmp0_other_with_cast.y2c_1))
      return false;
    return true;
  };
  function ImageFormat$decodingProps$delegate$lambda(this$0) {
    return function () {
      return toProps(this$0);
    };
  }
  function $decodeCOROUTINE$50(_this__u8e3s4, file, props, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n2d_1 = _this__u8e3s4;
    this.o2d_1 = file;
    this.p2d_1 = props;
  }
  protoOf($decodeCOROUTINE$50).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.o2d_1.v2d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.n2d_1.y2d(ARGUMENT, this.p2d_1.d2d(this.o2d_1));
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function ImageFormat(exts) {
    var tmp = this;
    tmp.w2d_1 = lazy(ImageFormat$decodingProps$delegate$lambda(this));
    var tmp_0 = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(exts.length);
    var inductionVariable = 0;
    var last = exts.length;
    while (inductionVariable < last) {
      var item = exts[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'korlibs.image.format.ImageFormat.extensions.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      // Inline function 'kotlin.text.toLowerCase' call
      // Inline function 'kotlin.js.asDynamic' call
      var this_0 = item.toLowerCase();
      var tmp$ret$3 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      destination.p(tmp$ret$3);
    }
    tmp_0.x2d_1 = toSet(destination);
  }
  protoOf(ImageFormat).z2c = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.w2d_1;
    decodingProps$factory();
    return this_0.p3();
  };
  protoOf(ImageFormat).z2d = function (s, props) {
    throw new NotImplementedError();
  };
  protoOf(ImageFormat).a2e = function (s, props) {
    // Inline function 'korlibs.io.lang.runIgnoringExceptions' call
    var tmp;
    try {
      // Inline function 'korlibs.image.format.ImageFormat.decodeHeader.<anonymous>' call
      var bmp = this.y2d(s, props);
      // Inline function 'kotlin.apply' call
      var this_0 = new ImageInfo();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.image.format.ImageFormat.decodeHeader.<anonymous>.<anonymous>' call
      this_0.c2e_1 = bmp.f1z_1;
      this_0.d2e_1 = bmp.g1z_1;
      this_0.e2e_1 = bmp.h1z_1;
      tmp = this_0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (true) {
          printStackTrace(e);
        }
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ImageFormat).y2d = function (s, props) {
    return this.z2d(s, props).r2e();
  };
  protoOf(ImageFormat).s2e = function (s, props) {
    // Inline function 'korlibs.io.lang.runIgnoringExceptions' call
    var tmp;
    try {
      // Inline function 'korlibs.image.format.ImageFormat.check.<anonymous>' call
      tmp = !(this.a2e(s, props) == null);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (true) {
          printStackTrace(e);
        }
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  };
  protoOf(ImageFormat).t2e = function (data, props) {
    return this.y2d(openSync(data), props);
  };
  protoOf(ImageFormat).u2e = function (data, props, $completion) {
    return this.t2e(data, props);
  };
  protoOf(ImageFormat).v2e = function (file, props, $completion) {
    var tmp = new $decodeCOROUTINE$50(this, file, props, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(ImageFormat).toString = function () {
    return 'ImageFormat(' + this.x2d_1 + ')';
  };
  function toProps(_this__u8e3s4, props) {
    props = props === VOID ? Companion_getInstance_15().k2c_1 : props;
    return props.c2d(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, _this__u8e3s4);
  }
  function ImageDecoderNotFoundException() {
  }
  function decodingProps$factory() {
    return getPropertyCallableRef('decodingProps', 1, KProperty1, function (receiver) {
      return receiver.z2c();
    }, null);
  }
  function ImageFormats_init_$Init$(formats, $this) {
    ImageFormats.call($this, toList_0(formats));
    return $this;
  }
  function $decodeSuspendCOROUTINE$55(_this__u8e3s4, data, props, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e2f_1 = _this__u8e3s4;
    this.f2f_1 = data;
    this.g2f_1 = props;
  }
  protoOf($decodeSuspendCOROUTINE$55).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 7;
            this.bc_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.i2f_1 = this.e2f_1;
            var tmp_1 = this;
            tmp_1.j2f_1 = openSync(this.f2f_1);
            var tmp_2 = this;
            tmp_2.k2f_1 = this.g2f_1;
            this.l2f_1 = this.i2f_1.t2f().s();
            this.bc_1 = 2;
            continue $sm;
          case 2:
            if (!this.l2f_1.t()) {
              this.bc_1 = 5;
              continue $sm;
            }

            this.m2f_1 = this.l2f_1.u();
            if (this.m2f_1.s2e(sliceStart(this.j2f_1), this.k2f_1)) {
              var tmp_3 = this;
              tmp_3.n2f_1 = this.m2f_1;
              var tmp_4 = this;
              tmp_4.o2f_1 = sliceStart(this.j2f_1);
              var tmp_5 = this;
              tmp_5.p2f_1 = this.k2f_1;
              this.bc_1 = 4;
              suspendResult = this.n2f_1.u2e(this.f2f_1, this.p2f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 3;
              continue $sm;
            }

          case 3:
            this.bc_1 = 2;
            continue $sm;
          case 4:
            this.h2f_1 = suspendResult;
            this.bc_1 = 6;
            continue $sm;
          case 5:
            throw UnsupportedOperationException_init_$Create$('No suitable image format : MAGIC:' + readString(sliceStart(this.j2f_1), 4, ASCII_getInstance()) + '(' + get_hex(readBytes_0(sliceStart(this.j2f_1), 4)) + ') (' + toString_3(readBytes_0(sliceStart(this.j2f_1), 4), ASCII_getInstance()) + ')');
          case 6:
            return this.h2f_1;
          case 7:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 7) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function ImageFormats(formats) {
    ImageFormat.call(this, ['']);
    this.s2f_1 = KorAtomicRef_0(minus(listFormats(formats), this));
  }
  protoOf(ImageFormats).u2f = function (_set____db54di) {
    var this_0 = this.s2f_1;
    _formats$factory();
    this_0.w2f(_set____db54di);
    return Unit_instance;
  };
  protoOf(ImageFormats).x2f = function () {
    // Inline function 'korlibs.io.concurrent.atomic.getValue' call
    var this_0 = this.s2f_1;
    _formats$factory_0();
    return this_0.p3();
  };
  protoOf(ImageFormats).t2f = function () {
    return this.x2f();
  };
  protoOf(ImageFormats).y2f = function (ext) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.t2f().s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'korlibs.image.format.ImageFormats.formatByExtOrNull.<anonymous>' call
        if (element.x2d_1.v(ext)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(ImageFormats).z2f = function (ext) {
    var tmp0_elvis_lhs = this.y2f(ext);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var this_0 = this.t2f();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'korlibs.image.format.ImageFormats.formatByExt.<anonymous>' call
        var list = element.x2d_1;
        addAll(destination, list);
      }
      throw UnsupportedOperationException_init_$Create$("Don't know how to generate file for extension '" + ext + "' (supported extensions " + destination + ')');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ImageFormats).toString = function () {
    return 'ImageFormats(' + this.t2f().l() + ')' + this.t2f();
  };
  protoOf(ImageFormats).a2e = function (s, props) {
    if (this.t2f().x())
      return null;
    var tmp0_iterator = this.t2f().s();
    $l$loop_0: while (tmp0_iterator.t()) {
      var format = tmp0_iterator.u();
      var tmp;
      try {
        var tmp1_elvis_lhs = format.a2e(sliceStart(s), props);
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        tmp = tmp_0;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          if (e instanceof CancellationException)
            throw e;
          continue $l$loop_0;
        } else {
          throw $p;
        }
      }
      return tmp;
    }
    return null;
  };
  protoOf(ImageFormats).z2d = function (s, props) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'korlibs.image.format.ImageFormats.readImageTyped' call
      var tmp0_iterator = this.t2f().s();
      while (tmp0_iterator.t()) {
        var format = tmp0_iterator.u();
        if (format.s2e(sliceStart(s), props)) {
          // Inline function 'korlibs.image.format.ImageFormats.readImage.<anonymous>' call
          var s_0 = sliceStart(s);
          tmp$ret$1 = format.z2d(sliceStart(s_0), props);
          break $l$block;
        }
      }
      throw UnsupportedOperationException_init_$Create$('No suitable image format : MAGIC:' + readString(sliceStart(s), 4, ASCII_getInstance()) + '(' + get_hex(readBytes_0(sliceStart(s), 4)) + ') (' + toString_3(readBytes_0(sliceStart(s), 4), ASCII_getInstance()) + ')');
    }
    return tmp$ret$1;
  };
  protoOf(ImageFormats).u2e = function (data, props, $completion) {
    var tmp = new $decodeSuspendCOROUTINE$55(this, data, props, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(ImageFormats).v2e = function (file, props, $completion) {
    return this.z2f(get_extensionLC_0(file)).v2e(file, props, $completion);
  };
  function listFormats(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = _this__u8e3s4.s();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      // Inline function 'korlibs.image.format.listFormats.<anonymous>' call
      var list = listFormats_0(element);
      addAll(destination, list);
    }
    return toMutableSet(destination);
  }
  function listFormats_0(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ImageFormats) {
      tmp = _this__u8e3s4.t2f();
    } else {
      tmp = setOf_0(_this__u8e3s4);
    }
    return tmp;
  }
  function _formats$factory() {
    return getPropertyCallableRef('_formats', 1, KMutableProperty1, function (receiver) {
      return receiver.x2f();
    }, function (receiver, value) {
      return receiver.u2f(value);
    });
  }
  function _formats$factory_0() {
    return getPropertyCallableRef('_formats', 1, KMutableProperty1, function (receiver) {
      return receiver.x2f();
    }, function (receiver, value) {
      return receiver.u2f(value);
    });
  }
  function ImageFormatsMutable() {
    ImageFormats_init_$Init$([], this);
    this.d2g_1 = new NonRecursiveLock();
  }
  protoOf(ImageFormatsMutable).e2g = function (formats) {
    // Inline function 'korlibs.datastructure.lock.NonRecursiveLock.invoke' call
    this.d2g_1;
    this.u2f(minus(plus(this.x2f(), formats), this));
  };
  function ImageInfo() {
    this.b2e_1 = new Mixin();
    this.c2e_1 = 0;
    this.d2e_1 = 0;
    this.e2e_1 = 8;
  }
  protoOf(ImageInfo).u14 = function (_set____db54di) {
    this.b2e_1.u14(_set____db54di);
  };
  protoOf(ImageInfo).v14 = function () {
    return this.b2e_1.v14();
  };
  protoOf(ImageInfo).toString = function () {
    var tmp = this.c2e_1;
    var tmp_0 = this.d2e_1;
    var tmp_1 = this.e2e_1;
    var tmp0_safe_receiver = this.v14();
    return 'ImageInfo(width=' + tmp + ', height=' + tmp_0 + ', bpp=' + tmp_1 + ', extra=' + (tmp0_safe_receiver == null ? null : toMap(tmp0_safe_receiver)) + ')';
  };
  function get_imageLoadingLogger() {
    _init_properties_KorioExt_kt__tiega5();
    return imageLoadingLogger;
  }
  var imageLoadingLogger;
  function readBitmapSlice(_this__u8e3s4, name, atlas, props, $completion) {
    name = name === VOID ? null : name;
    atlas = atlas === VOID ? null : atlas;
    props = props === VOID ? Companion_getInstance_15().k2c_1 : props;
    return readBitmapSlice_0(_this__u8e3s4, props, name, atlas, $completion);
  }
  function readBitmap(_this__u8e3s4, props, $completion) {
    props = props === VOID ? new ImageDecodingProps('file.bin') : props;
    var tmp = new $readBitmapCOROUTINE$56(_this__u8e3s4, props, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function readBitmap_0(_this__u8e3s4, props, $completion) {
    props = props === VOID ? Companion_getInstance_15().k2c_1 : props;
    return _readBitmap(_this__u8e3s4, VOID, props.z2c(), $completion);
  }
  function readBitmapSlice_0(_this__u8e3s4, bprops, name, atlas, $completion) {
    name = name === VOID ? null : name;
    atlas = atlas === VOID ? null : atlas;
    var tmp = new $readBitmapSliceCOROUTINE$57(_this__u8e3s4, bprops, name, atlas, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function _readBitmap(file, bytes, props, $completion) {
    file = file === VOID ? null : file;
    bytes = bytes === VOID ? null : bytes;
    props = props === VOID ? Companion_getInstance_15().k2c_1 : props;
    var tmp = new $_readBitmapCOROUTINE$58(file, bytes, props, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function $readBitmapCOROUTINE$56(_this__u8e3s4, props, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n2g_1 = _this__u8e3s4;
    this.o2g_1 = props;
  }
  protoOf($readBitmapCOROUTINE$56).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.bc_1 = 1;
            suspendResult = readAll(this.n2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p2g_1 = suspendResult;
            this.bc_1 = 2;
            suspendResult = _readBitmap(VOID, this.p2g_1, this.o2g_1.z2c(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readBitmapSliceCOROUTINE$57(_this__u8e3s4, bprops, name, atlas, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y2g_1 = _this__u8e3s4;
    this.z2g_1 = bprops;
    this.a2h_1 = name;
    this.b2h_1 = atlas;
  }
  protoOf($readBitmapSliceCOROUTINE$57).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = readBitmap_0(this.y2g_1, this.z2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            return !(this.b2h_1 == null) ? this.b2h_1.u2h(result.b27(), Unit_instance, this.a2h_1).r1y_1 : slice(result, VOID, this.a2h_1);
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $_readBitmapCOROUTINE$58(file, bytes, props, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k2h_1 = file;
    this.l2h_1 = bytes;
    this.m2h_1 = props;
  }
  protoOf($_readBitmapCOROUTINE$58).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 8;
            this.n2h_1 = !(this.k2h_1 == null) ? this.m2h_1.d2d(this.k2h_1) : this.m2h_1;
            this.o2h_1 = !this.n2h_1.v2c_1 ? listOf_0(this.n2h_1.w2c_1) : this.n2h_1.w2c_1 == null ? listOf_0(null) : this.n2h_1.u2c_1 ? listOf([this.n2h_1.w2c_1, null]) : listOf([null, this.n2h_1.w2c_1]);
            this.p2h_1 = null;
            this.q2h_1 = this.o2h_1.s();
            this.bc_1 = 1;
            continue $sm;
          case 1:
            if (!this.q2h_1.t()) {
              this.bc_1 = 7;
              continue $sm;
            }

            this.r2h_1 = this.q2h_1.u();
            this.cc_1 = 5;
            var tmp_0 = this;
            var tmp1_elvis_lhs = this.r2h_1;
            tmp_0.s2h_1 = tmp1_elvis_lhs == null ? get_nativeImageFormatProvider() : tmp1_elvis_lhs;
            if (!(this.l2h_1 == null)) {
              this.bc_1 = 3;
              suspendResult = this.s2h_1.u2e(this.l2h_1, this.n2h_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!(this.k2h_1 == null)) {
                this.bc_1 = 2;
                suspendResult = this.s2h_1.v2e(this.k2h_1, this.n2h_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_1 = this;
                throw new NotImplementedError();
              }
            }

          case 2:
            this.t2h_1 = suspendResult;
            this.bc_1 = 4;
            continue $sm;
          case 3:
            this.t2h_1 = suspendResult;
            this.bc_1 = 4;
            continue $sm;
          case 4:
            var bmp = this.t2h_1;
            if (this.n2h_1.r2c_1) {
              asumePremultiplied(bmp);
            }

            return bmp;
          case 5:
            this.cc_1 = 8;
            var tmp_2 = this.ec_1;
            if (tmp_2 instanceof Error) {
              var e = this.ec_1;
              this.p2h_1 = e;
              if (e instanceof CancellationException)
                throw e;
              else {
                var tmp_3;
                if (e instanceof FileNotFoundException) {
                  tmp_3 = true;
                } else {
                  tmp_3 = e instanceof ImageDecoderNotFoundException;
                }
                if (!tmp_3) {
                  var this_0 = get_imageLoadingLogger();
                  var level = Level_INFO_getInstance();
                  if (this_0.w17(level)) {
                    this_0.x17(level, e);
                  }
                }
              }
              this.bc_1 = 6;
              continue $sm;
            } else {
              throw this.ec_1;
            }

          case 6:
            this.cc_1 = 8;
            this.bc_1 = 1;
            continue $sm;
          case 7:
            throw ensureNotNull(this.p2h_1);
          case 8:
            throw this.ec_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.cc_1 === 8) {
          throw e_0;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e_0;
        }
      }
     while (true);
  };
  var properties_initialized_KorioExt_kt_kjvlu9;
  function _init_properties_KorioExt_kt__tiega5() {
    if (!properties_initialized_KorioExt_kt_kjvlu9) {
      properties_initialized_KorioExt_kt_kjvlu9 = true;
      imageLoadingLogger = Companion_getInstance_2().i17('ImageLoading');
    }
  }
  function BaseNativeImageFormatProvider() {
    NativeImageFormatProvider.call(this);
  }
  protoOf(BaseNativeImageFormatProvider).t2f = function () {
    return get_RegisteredImageFormats();
  };
  protoOf(BaseNativeImageFormatProvider).v2h = function (data, props, $completion) {
    return this.w2h(this.t2f().t2e(data, props), props);
  };
  protoOf(BaseNativeImageFormatProvider).x2h = function (bmp) {
    return BitmapNativeImage_init_$Create$(bmp);
  };
  protoOf(BaseNativeImageFormatProvider).w2h = function (bmp, props) {
    var bmp32 = bmp.b27();
    return new NativeImageResult(this.x2h(props.r2c_1 ? asumePremultiplied(bmp32) : props.a2d() ? bmp32.b28() : bmp32.c28()));
  };
  protoOf(BaseNativeImageFormatProvider).j29 = function (width, height, premultiplied) {
    return this.x2h(new Bitmap32(width, height, VOID, premultiplied == null ? true : premultiplied));
  };
  function NativeImageResult(image, originalWidth, originalHeight) {
    originalWidth = originalWidth === VOID ? image.f1z_1 : originalWidth;
    originalHeight = originalHeight === VOID ? image.g1z_1 : originalHeight;
    this.b2i_1 = image;
    this.c2i_1 = originalWidth;
    this.d2i_1 = originalHeight;
  }
  protoOf(NativeImageResult).toString = function () {
    return 'NativeImageResult(image=' + this.b2i_1 + ', originalWidth=' + this.c2i_1 + ', originalHeight=' + this.d2i_1 + ')';
  };
  protoOf(NativeImageResult).hashCode = function () {
    var result = hashCode(this.b2i_1);
    result = imul(result, 31) + this.c2i_1 | 0;
    result = imul(result, 31) + this.d2i_1 | 0;
    return result;
  };
  protoOf(NativeImageResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NativeImageResult))
      return false;
    var tmp0_other_with_cast = other instanceof NativeImageResult ? other : THROW_CCE();
    if (!equals(this.b2i_1, tmp0_other_with_cast.b2i_1))
      return false;
    if (!(this.c2i_1 === tmp0_other_with_cast.c2i_1))
      return false;
    if (!(this.d2i_1 === tmp0_other_with_cast.d2i_1))
      return false;
    return true;
  };
  function BitmapNativeImage_init_$Init$(bitmap, $this) {
    BitmapNativeImage.call($this, bitmap.b27());
    return $this;
  }
  function BitmapNativeImage_init_$Create$(bitmap) {
    return BitmapNativeImage_init_$Init$(bitmap, objectCreate(protoOf(BitmapNativeImage)));
  }
  function BitmapNativeImage(bitmap) {
    NativeImage.call(this, bitmap.f1z_1, bitmap.g1z_1, bitmap, bitmap.m1z_1);
    this.s2i_1 = bitmap;
    this.t2i_1 = this.s2i_1.y26_1;
  }
  protoOf(BitmapNativeImage).fb = function () {
    return 'BitmapNativeImage';
  };
  protoOf(BitmapNativeImage).k26 = function () {
    return this.s2i_1;
  };
  protoOf(BitmapNativeImage).y1z = function (x, y, width, height, out, offset) {
    return this.s2i_1.y1z(x, y, width, height, out, offset);
  };
  protoOf(BitmapNativeImage).a20 = function (x, y, width, height, out, offset) {
    return this.s2i_1.a20(x, y, width, height, out, offset);
  };
  protoOf(BitmapNativeImage).b20 = function (x, y, v) {
    return this.s2i_1.b20(x, y, v);
  };
  protoOf(BitmapNativeImage).z1z = function (x, y) {
    return this.s2i_1.z1z(x, y);
  };
  function $decodeInternalCOROUTINE$61(_this__u8e3s4, vfs, path, props, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c2j_1 = _this__u8e3s4;
    this.d2j_1 = vfs;
    this.e2j_1 = path;
    this.f2j_1 = props;
  }
  protoOf($decodeInternalCOROUTINE$61).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.bc_1 = 1;
            suspendResult = this.d2j_1.h2j(this.e2j_1).i2j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g2j_1 = suspendResult;
            this.bc_1 = 2;
            suspendResult = this.c2j_1.v2h(this.g2j_1, this.f2j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $decodeSuspendCOROUTINE$65(_this__u8e3s4, data, props, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r2j_1 = _this__u8e3s4;
    this.s2j_1 = data;
    this.t2j_1 = props;
  }
  protoOf($decodeSuspendCOROUTINE$65).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.r2j_1.v2h(this.s2j_1, this.t2j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return ARGUMENT.b2i_1;
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $decodeCOROUTINE$66(_this__u8e3s4, file, props, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c2k_1 = _this__u8e3s4;
    this.d2k_1 = file;
    this.e2k_1 = props;
  }
  protoOf($decodeCOROUTINE$66).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.c2k_1.y2h(this.d2k_1.g2k(), this.d2k_1.h2k(), this.e2k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return ARGUMENT.b2i_1;
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $decodeCOROUTINE$67(_this__u8e3s4, file, props, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q2k_1 = _this__u8e3s4;
    this.r2k_1 = file;
    this.s2k_1 = props;
  }
  protoOf($decodeCOROUTINE$67).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.bc_1 = 1;
            suspendResult = this.r2k_1.u2k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t2k_1 = suspendResult;
            this.bc_1 = 2;
            suspendResult = this.q2k_1.z2h(this.t2k_1, this.s2k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function NativeImageFormatProvider() {
  }
  protoOf(NativeImageFormatProvider).y2h = function (vfs, path, props, $completion) {
    var tmp = new $decodeInternalCOROUTINE$61(this, vfs, path, props, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(NativeImageFormatProvider).a2i = function (data, props, $completion) {
    var tmp = new $decodeSuspendCOROUTINE$65(this, data, props, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(NativeImageFormatProvider).u2e = function (data, props, $completion) {
    return this.a2i(data, props, $completion);
  };
  protoOf(NativeImageFormatProvider).z2h = function (file, props, $completion) {
    var tmp = new $decodeCOROUTINE$66(this, file, props, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(NativeImageFormatProvider).v2e = function (file, props, $completion) {
    var tmp = new $decodeCOROUTINE$67(this, file, props, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  function get_RegisteredImageFormats() {
    _init_properties_RegisteredImageFormats_kt__dq34zn();
    return RegisteredImageFormats;
  }
  var RegisteredImageFormats;
  var properties_initialized_RegisteredImageFormats_kt_ribwxx;
  function _init_properties_RegisteredImageFormats_kt__dq34zn() {
    if (!properties_initialized_RegisteredImageFormats_kt_ribwxx) {
      properties_initialized_RegisteredImageFormats_kt_ribwxx = true;
      RegisteredImageFormats = new ImageFormatsMutable();
    }
  }
  function d2i(v) {
    return toIntRound(clamp01(v) * 255);
  }
  function f2i(v) {
    return toIntRound_0(clamp01_0(v) * 255);
  }
  function packIntUnchecked(r, g, b, a) {
    return (r & 255) << 0 | (g & 255) << 8 | (b & 255) << 16 | (a & 255) << 24;
  }
  function packIntClamped(r, g, b, a) {
    return clampUByte(r) | clampUByte(g) << 8 | clampUByte(b) << 16 | clampUByte(a) << 24;
  }
  function get_logger() {
    _init_properties_AsyncExt_kt__ahev1h();
    return logger;
  }
  var logger;
  var DEFAULT_SUSPEND_TEST_TIMEOUT;
  var DEFAULT_TEST_SYNC_IO;
  function get_DEBUG_ASYNC_LAUNCH_ERRORS() {
    _init_properties_AsyncExt_kt__ahev1h();
    // Inline function 'kotlin.getValue' call
    var this_0 = DEBUG_ASYNC_LAUNCH_ERRORS$delegate;
    DEBUG_ASYNC_LAUNCH_ERRORS$factory();
    return this_0.p3();
  }
  var DEBUG_ASYNC_LAUNCH_ERRORS$delegate;
  function asyncImmediately(context, callback) {
    _init_properties_AsyncExt_kt__ahev1h();
    return asyncImmediately_0(CoroutineScope(context), callback);
  }
  function launchImmediately(context, callback) {
    _init_properties_AsyncExt_kt__ahev1h();
    return launchImmediately_0(CoroutineScope(context), callback);
  }
  function asyncImmediately_0(_this__u8e3s4, callback) {
    _init_properties_AsyncExt_kt__ahev1h();
    return _async(_this__u8e3s4, CoroutineStart_UNDISPATCHED_getInstance(), callback);
  }
  function launchImmediately_0(_this__u8e3s4, callback) {
    _init_properties_AsyncExt_kt__ahev1h();
    return _launch(_this__u8e3s4, CoroutineStart_UNDISPATCHED_getInstance(), callback);
  }
  function launchUnscoped(_this__u8e3s4, block) {
    _init_properties_AsyncExt_kt__ahev1h();
    startCoroutine(block, new launchUnscoped$1(_this__u8e3s4));
  }
  function _async(_this__u8e3s4, start, callback) {
    _init_properties_AsyncExt_kt__ahev1h();
    var tmp = _this__u8e3s4.gj();
    return async(_this__u8e3s4, tmp, start, _async$slambda_0(callback, null));
  }
  function _launch(_this__u8e3s4, start, callback) {
    _init_properties_AsyncExt_kt__ahev1h();
    var tmp = _this__u8e3s4.gj();
    return launch(_this__u8e3s4, tmp, start, _launch$slambda_0(callback, null));
  }
  function async_0(context, callback) {
    _init_properties_AsyncExt_kt__ahev1h();
    return asyncImmediately_0(CoroutineScope(context), callback);
  }
  function launchUnscopedAndWait(_this__u8e3s4, block, $completion) {
    var deferred = CompletableDeferred();
    startCoroutine(block, new launchUnscopedAndWait$1(_this__u8e3s4, deferred));
    return deferred.am($completion);
  }
  function launchUnscoped_0(_this__u8e3s4, block) {
    _init_properties_AsyncExt_kt__ahev1h();
    return launchUnscoped(_this__u8e3s4.gj(), block);
  }
  function DEBUG_ASYNC_LAUNCH_ERRORS$delegate$lambda() {
    _init_properties_AsyncExt_kt__ahev1h();
    return Companion_instance_21.e15('DEBUG_ASYNC_LAUNCH_ERRORS') === 'true';
  }
  function launchUnscoped$1($this_launchUnscoped) {
    this.v2k_1 = $this_launchUnscoped;
  }
  protoOf(launchUnscoped$1).b6 = function () {
    return this.v2k_1;
  };
  protoOf(launchUnscoped$1).cf = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(result);
      if (tmp0_safe_receiver == null)
        null;
      else {
        printStackTrace(tmp0_safe_receiver);
      }
    }
  };
  protoOf(launchUnscoped$1).d6 = function (result) {
    return this.cf(result);
  };
  function _async$slambda($callback, resultContinuation) {
    this.e2l_1 = $callback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_async$slambda).h2l = function ($this$async, $completion) {
    var tmp = this.i2l($this$async, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(_async$slambda).jd = function (p1, $completion) {
    return this.h2l((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_async$slambda).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.e2l_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g2l_1 = suspendResult;
            this.cc_1 = 3;
            this.bc_1 = 4;
            continue $sm;
          case 2:
            this.cc_1 = 3;
            var tmp_0 = this.ec_1;
            if (tmp_0 instanceof Error) {
              var e = this.ec_1;
              var tmp_1 = this;
              if (e instanceof CancellationException)
                throw e;
              if (get_DEBUG_ASYNC_LAUNCH_ERRORS()) {
                var this_0 = get_logger();
                var level = Level_ERROR_getInstance();
                if (this_0.w17(level)) {
                  this_0.x17(level, 'CoroutineScope._async.catch:');
                }
                printStackTrace(e);
              }
              throw e;
            } else {
              throw this.ec_1;
            }

          case 3:
            throw this.ec_1;
          case 4:
            this.cc_1 = 3;
            return this.g2l_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.cc_1 === 3) {
          throw e_0;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(_async$slambda).i2l = function ($this$async, completion) {
    var i = new _async$slambda(this.e2l_1, completion);
    i.f2l_1 = $this$async;
    return i;
  };
  function _async$slambda_0($callback, resultContinuation) {
    var i = new _async$slambda($callback, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.h2l($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _launch$slambda($callback, resultContinuation) {
    this.r2l_1 = $callback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_launch$slambda).t2l = function ($this$launch, $completion) {
    var tmp = this.i2l($this$launch, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(_launch$slambda).jd = function (p1, $completion) {
    return this.t2l((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_launch$slambda).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.r2l_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.cc_1 = 3;
            this.bc_1 = 4;
            continue $sm;
          case 2:
            this.cc_1 = 3;
            var tmp_0 = this.ec_1;
            if (tmp_0 instanceof CancellationException) {
              var e = this.ec_1;
              throw e;
            } else {
              var tmp_1 = this.ec_1;
              if (tmp_1 instanceof Error) {
                var e_0 = this.ec_1;
                if (get_DEBUG_ASYNC_LAUNCH_ERRORS()) {
                  var this_0 = get_logger();
                  var level = Level_ERROR_getInstance();
                  if (this_0.w17(level)) {
                    this_0.x17(level, 'CoroutineScope._launch.catch:');
                  }
                  printStackTrace(e_0);
                }
                throw e_0;
              } else {
                throw this.ec_1;
              }
            }

          case 3:
            throw this.ec_1;
          case 4:
            this.cc_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.cc_1 === 3) {
          throw e_1;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(_launch$slambda).i2l = function ($this$launch, completion) {
    var i = new _launch$slambda(this.r2l_1, completion);
    i.s2l_1 = $this$launch;
    return i;
  };
  function _launch$slambda_0($callback, resultContinuation) {
    var i = new _launch$slambda($callback, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t2l($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function launchUnscopedAndWait$1($this_launchUnscopedAndWait, $deferred) {
    this.v2l_1 = $deferred;
    this.u2l_1 = $this_launchUnscopedAndWait;
  }
  protoOf(launchUnscopedAndWait$1).b6 = function () {
    return this.u2l_1;
  };
  protoOf(launchUnscopedAndWait$1).d6 = function (result) {
    completeWith(this.v2l_1, result);
  };
  function DEBUG_ASYNC_LAUNCH_ERRORS$factory() {
    return getPropertyCallableRef('DEBUG_ASYNC_LAUNCH_ERRORS', 0, KProperty0, function () {
      return get_DEBUG_ASYNC_LAUNCH_ERRORS();
    }, null);
  }
  var properties_initialized_AsyncExt_kt_7k2grr;
  function _init_properties_AsyncExt_kt__ahev1h() {
    if (!properties_initialized_AsyncExt_kt_7k2grr) {
      properties_initialized_AsyncExt_kt_7k2grr = true;
      logger = Companion_getInstance_2().i17('AsyncExt');
      // Inline function 'korlibs.time.seconds' call
      // Inline function 'korlibs.time.seconds' call
      DEFAULT_SUSPEND_TEST_TIMEOUT = toDuration(20, DurationUnit_SECONDS_getInstance());
      DEFAULT_TEST_SYNC_IO = false;
      DEBUG_ASYNC_LAUNCH_ERRORS$delegate = lazy(DEBUG_ASYNC_LAUNCH_ERRORS$delegate$lambda);
    }
  }
  function AsyncThread$sync$slambda($oldPromise, $func, resultContinuation) {
    this.e2m_1 = $oldPromise;
    this.f2m_1 = $func;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncThread$sync$slambda).i2m = function ($completion) {
    var tmp = this.j2m($completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(AsyncThread$sync$slambda).xc = function ($completion) {
    return this.i2m($completion);
  };
  protoOf(AsyncThread$sync$slambda).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            this.g2m_1 = this.e2m_1;
            if (this.g2m_1 == null) {
              this.h2m_1 = null;
              this.bc_1 = 2;
              continue $sm;
            } else {
              this.bc_1 = 1;
              suspendResult = this.g2m_1.am(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.h2m_1 = suspendResult;
            this.bc_1 = 2;
            continue $sm;
          case 2:
            this.bc_1 = 3;
            suspendResult = this.f2m_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return suspendResult;
          case 4:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 4) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  protoOf(AsyncThread$sync$slambda).j2m = function (completion) {
    return new AsyncThread$sync$slambda(this.e2m_1, this.f2m_1, completion);
  };
  function AsyncThread$sync$slambda_0($oldPromise, $func, resultContinuation) {
    var i = new AsyncThread$sync$slambda($oldPromise, $func, resultContinuation);
    var l = function ($completion) {
      return i.i2m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncThread() {
    this.k2m_1 = null;
  }
  protoOf(AsyncThread).l2m = function (func, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.b6();
    var task = this.m2m(tmp$ret$0, func);
    return task.am($completion);
  };
  protoOf(AsyncThread).m2m = function (context, func) {
    var oldPromise = this.k2m_1;
    var promise = asyncImmediately(context, AsyncThread$sync$slambda_0(oldPromise, func, null));
    this.k2m_1 = promise;
    return promise;
  };
  function delay_0(_this__u8e3s4, time, $completion) {
    return delay(get_millisecondsLong(time), $completion);
  }
  function withTimeoutNullable(time, block, $completion) {
    var tmp = new $withTimeoutNullableCOROUTINE$79(time, block, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function $withTimeoutNullableCOROUTINE$79(time, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v2m_1 = time;
    this.w2m_1 = block;
  }
  protoOf($withTimeoutNullableCOROUTINE$79).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            var tmp_0;
            var tmp_1 = this.v2m_1;
            if ((tmp_1 == null ? null : new Duration(tmp_1)) == null) {
              tmp_0 = true;
            } else {
              tmp_0 = get_isNil(this.v2m_1);
            }

            if (tmp_0) {
              this.bc_1 = 2;
              suspendResult = this.w2m_1(CoroutineScope(this.b6()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 1;
              suspendResult = withTimeout(get_millisecondsLong(this.v2m_1), this.w2m_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.x2m_1 = suspendResult;
            this.bc_1 = 3;
            continue $sm;
          case 2:
            this.x2m_1 = suspendResult;
            this.bc_1 = 3;
            continue $sm;
          case 3:
            return this.x2m_1;
          case 4:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 4) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function Companion_9() {
    Companion_instance_15 = this;
    this.y2m_1 = new PreferSyncIo(true);
    this.z2m_1 = new PreferSyncIo(false);
  }
  protoOf(Companion_9).a2n = function (preferSyncIo) {
    return preferSyncIo === true ? this.y2m_1 : this.z2m_1;
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_9();
    return Companion_instance_15;
  }
  function PreferSyncIo(preferSyncIo) {
    Companion_getInstance_16();
    this.b2n_1 = preferSyncIo;
  }
  protoOf(PreferSyncIo).l3 = function () {
    return Companion_getInstance_16();
  };
  protoOf(PreferSyncIo).toString = function () {
    return 'PreferSyncIo(preferSyncIo=' + this.b2n_1 + ')';
  };
  protoOf(PreferSyncIo).hashCode = function () {
    return getBooleanHashCode(this.b2n_1);
  };
  protoOf(PreferSyncIo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PreferSyncIo))
      return false;
    var tmp0_other_with_cast = other instanceof PreferSyncIo ? other : THROW_CCE();
    if (!(this.b2n_1 === tmp0_other_with_cast.b2n_1))
      return false;
    return true;
  };
  function Signal$_init_$lambda_6vimhp() {
    return Unit_instance;
  }
  function Signal(onRegister) {
    var tmp;
    if (onRegister === VOID) {
      tmp = Signal$_init_$lambda_6vimhp;
    } else {
      tmp = onRegister;
    }
    onRegister = tmp;
    BaseSignal.call(this, onRegister);
  }
  protoOf(Signal).g2n = function (handler) {
    return this.l2n(false, handler);
  };
  protoOf(Signal).m2n = function (handler) {
    return this.g2n(handler);
  };
  protoOf(Signal).n2n = function (value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'korlibs.io.async.BaseSignal.iterateCallbacks' call
      if (this.i2n_1.x()) {
        tmp$ret$0 = Unit_instance;
        break $l$block;
      }
      try {
        this.k2n_1 = this.k2n_1 + 1 | 0;
        // Inline function 'korlibs.datastructure.iterators.fastIterateRemove' call
        var this_0 = this.i2n_1;
        var n = 0;
        var m = 0;
        while (n < this_0.l()) {
          if (m >= 0 ? !(m === n) : false) {
            this_0.m(m, this_0.b1(n));
          }
          // Inline function 'korlibs.io.async.BaseSignal.iterateCallbacks.<anonymous>' call
          var node = this_0.b1(n);
          var remove = node.o2n_1;
          // Inline function 'korlibs.io.async.Signal.invoke.<anonymous>' call
          node.p2n_1(value);
          if (remove) {
            m = m - 1 | 0;
          }
          n = n + 1 | 0;
          m = m + 1 | 0;
        }
        while (this_0.l() > m) {
          this_0.e1(this_0.l() - 1 | 0);
        }
      }finally {
        this.k2n_1 = this.k2n_1 - 1 | 0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.j2n_1.x()) {
          // Inline function 'korlibs.datastructure.iterators.fastIterateRemove' call
          var this_1 = this.j2n_1;
          var n_0 = 0;
          var m_0 = 0;
          while (n_0 < this_1.l()) {
            if (m_0 >= 0 ? !(m_0 === n_0) : false) {
              this_1.m(m_0, this_1.b1(n_0));
            }
            // Inline function 'korlibs.io.async.BaseSignal.iterateCallbacks.<anonymous>' call
            var it = this_1.b1(n_0);
            this.i2n_1.m2(it);
            if (true) {
              m_0 = m_0 - 1 | 0;
            }
            n_0 = n_0 + 1 | 0;
            m_0 = m_0 + 1 | 0;
          }
          while (this_1.l() > m_0) {
            this_1.e1(this_1.l() - 1 | 0);
          }
        }
      }
    }
    return tmp$ret$0;
  };
  function Node($outer, once, item) {
    this.q2n_1 = $outer;
    this.o2n_1 = once;
    this.p2n_1 = item;
  }
  protoOf(Node).r13 = function () {
    if (this.q2n_1.k2n_1 > 0) {
      this.q2n_1.j2n_1.p(this);
    } else {
      this.q2n_1.i2n_1.m2(this);
    }
  };
  function BaseSignal$_init_$lambda_tuu04y() {
    return Unit_instance;
  }
  function BaseSignal(onRegister) {
    var tmp;
    if (onRegister === VOID) {
      tmp = BaseSignal$_init_$lambda_tuu04y;
    } else {
      tmp = onRegister;
    }
    onRegister = tmp;
    this.h2n_1 = onRegister;
    this.i2n_1 = FastArrayList_init_$Create$();
    this.j2n_1 = FastArrayList_init_$Create$();
    this.k2n_1 = 0;
  }
  protoOf(BaseSignal).r2n = function () {
    return this.i2n_1.l();
  };
  protoOf(BaseSignal).s2n = function () {
    return this.r2n() > 0;
  };
  protoOf(BaseSignal).l2n = function (once, handler) {
    this.h2n_1();
    var node = new Node(this, once, handler);
    this.i2n_1.p(node);
    return node;
  };
  function invoke(_this__u8e3s4) {
    return _this__u8e3s4.n2n(Unit_instance);
  }
  function AsyncSignal$_init_$lambda_rsv6fb() {
    return Unit_instance;
  }
  function $invokeCOROUTINE$80(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b2o_1 = _this__u8e3s4;
    this.c2o_1 = value;
  }
  protoOf($invokeCOROUTINE$80).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 11;
            this.bc_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.e2o_1 = this.b2o_1;
            if (this.e2o_1.i2n_1.x()) {
              this.d2o_1 = Unit_instance;
              this.bc_1 = 10;
              continue $sm;
            } else {
              this.bc_1 = 2;
              continue $sm;
            }

          case 2:
            this.bc_1 = 3;
            continue $sm;
          case 3:
            this.cc_1 = 9;
            var tmp0_this = this.e2o_1;
            tmp0_this.k2n_1 = tmp0_this.k2n_1 + 1 | 0;
            var tmp_1 = this;
            tmp_1.g2o_1 = this.e2o_1.i2n_1;
            this.h2o_1 = 0;
            this.i2o_1 = 0;
            this.bc_1 = 4;
            continue $sm;
          case 4:
            if (!(this.h2o_1 < this.g2o_1.l())) {
              this.bc_1 = 7;
              continue $sm;
            }

            if (this.i2o_1 >= 0 ? !(this.i2o_1 === this.h2o_1) : false) {
              this.g2o_1.m(this.i2o_1, this.g2o_1.b1(this.h2o_1));
            }

            var tmp_2 = this;
            tmp_2.j2o_1 = this.g2o_1.b1(this.h2o_1);
            this.k2o_1 = this.j2o_1.o2n_1;
            var tmp_3 = this;
            tmp_3.l2o_1 = this.j2o_1.p2n_1;
            this.bc_1 = 5;
            suspendResult = this.l2o_1(this.c2o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (this.k2o_1) {
              this.i2o_1 = this.i2o_1 - 1 | 0;
              this.bc_1 = 6;
              continue $sm;
            } else {
              this.bc_1 = 6;
              continue $sm;
            }

          case 6:
            this.h2o_1 = this.h2o_1 + 1 | 0;
            this.i2o_1 = this.i2o_1 + 1 | 0;
            this.bc_1 = 4;
            continue $sm;
          case 7:
            while (this.g2o_1.l() > this.i2o_1) {
              this.g2o_1.e1(this.g2o_1.l() - 1 | 0);
            }

            var tmp_4 = this;
            tmp_4.f2o_1 = Unit_instance;
            this.cc_1 = 11;
            this.bc_1 = 8;
            continue $sm;
          case 8:
            this.cc_1 = 11;
            var tmp2_this = this.e2o_1;
            tmp2_this.k2n_1 = tmp2_this.k2n_1 - 1 | 0;
            if (!this.e2o_1.j2n_1.x()) {
              var this_0 = this.e2o_1.j2n_1;
              var n = 0;
              var m = 0;
              while (n < this_0.l()) {
                if (m >= 0 ? !(m === n) : false) {
                  this_0.m(m, this_0.b1(n));
                }
                var it = this_0.b1(n);
                this.e2o_1.i2n_1.m2(it);
                m = m - 1 | 0;
                n = n + 1 | 0;
                m = m + 1 | 0;
              }
              while (this_0.l() > m) {
                this_0.e1(this_0.l() - 1 | 0);
              }
            }

            if (false) {
              this.bc_1 = 1;
              continue $sm;
            }

            this.bc_1 = 10;
            continue $sm;
          case 9:
            this.cc_1 = 11;
            var t = this.ec_1;
            var tmp2_this_0 = this.e2o_1;
            tmp2_this_0.k2n_1 = tmp2_this_0.k2n_1 - 1 | 0;
            if (!this.e2o_1.j2n_1.x()) {
              var this_1 = this.e2o_1.j2n_1;
              var n_0 = 0;
              var m_0 = 0;
              while (n_0 < this_1.l()) {
                if (m_0 >= 0 ? !(m_0 === n_0) : false) {
                  this_1.m(m_0, this_1.b1(n_0));
                }
                var it_0 = this_1.b1(n_0);
                this.e2o_1.i2n_1.m2(it_0);
                m_0 = m_0 - 1 | 0;
                n_0 = n_0 + 1 | 0;
                m_0 = m_0 + 1 | 0;
              }
              while (this_1.l() > m_0) {
                this_1.e1(this_1.l() - 1 | 0);
              }
            }

            throw t;
          case 10:
            return Unit_instance;
          case 11:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 11) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function AsyncSignal(onRegister) {
    var tmp;
    if (onRegister === VOID) {
      tmp = AsyncSignal$_init_$lambda_rsv6fb;
    } else {
      tmp = onRegister;
    }
    onRegister = tmp;
    BaseSignal.call(this, onRegister);
  }
  protoOf(AsyncSignal).q2o = function (value, $completion) {
    var tmp = new $invokeCOROUTINE$80(this, value, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  function KorAtomicRef(initial, dummy) {
    this.v2f_1 = initial;
  }
  protoOf(KorAtomicRef).w2f = function (_set____db54di) {
    this.v2f_1 = _set____db54di;
  };
  protoOf(KorAtomicRef).p3 = function () {
    return this.v2f_1;
  };
  protoOf(KorAtomicRef).r2o = function (expect, update) {
    var tmp;
    if (equals(this.p3(), expect)) {
      this.w2f(update);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(KorAtomicRef).toString = function () {
    return '' + this.p3();
  };
  function KorAtomicRef_0(initial) {
    return korAtomic_0(initial);
  }
  function KorAtomicLong(initial, dummy) {
    this.s2o_1 = initial;
  }
  protoOf(KorAtomicLong).t2o = function (_set____db54di) {
    this.s2o_1 = _set____db54di;
  };
  protoOf(KorAtomicLong).p3 = function () {
    return this.s2o_1;
  };
  protoOf(KorAtomicLong).u2o = function (expect, update) {
    var tmp;
    if (this.p3().equals(expect)) {
      this.t2o(update);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(KorAtomicLong).r2o = function (expect, update) {
    var tmp = expect instanceof Long ? expect : THROW_CCE();
    return this.u2o(tmp, update instanceof Long ? update : THROW_CCE());
  };
  protoOf(KorAtomicLong).v2o = function (delta) {
    this.t2o(this.p3().pb(delta));
    return this.p3();
  };
  protoOf(KorAtomicLong).toString = function () {
    return this.p3().toString();
  };
  function KorAtomicInt(initial, dummy) {
    this.w2o_1 = initial;
  }
  protoOf(KorAtomicInt).x2o = function (_set____db54di) {
    this.w2o_1 = _set____db54di;
  };
  protoOf(KorAtomicInt).p3 = function () {
    return this.w2o_1;
  };
  protoOf(KorAtomicInt).y2o = function (expect, update) {
    var tmp;
    if (this.p3() === expect) {
      this.x2o(update);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(KorAtomicInt).r2o = function (expect, update) {
    var tmp = (!(expect == null) ? typeof expect === 'number' : false) ? expect : THROW_CCE();
    return this.y2o(tmp, (!(update == null) ? typeof update === 'number' : false) ? update : THROW_CCE());
  };
  protoOf(KorAtomicInt).z2o = function (delta) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'korlibs.io.concurrent.atomic.update' call
      while (true) {
        var value = this.p3();
        // Inline function 'korlibs.io.concurrent.atomic.KorAtomicInt.addAndGet.<anonymous>' call
        var next = value + delta | 0;
        if (this.r2o(value, next)) {
          tmp$ret$1 = next;
          break $l$block;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(KorAtomicInt).toString = function () {
    return '' + this.p3();
  };
  function incrementAndGet(_this__u8e3s4) {
    return _this__u8e3s4.z2o(1);
  }
  function _Dyn___init__impl__6cuxxc(value) {
    return value;
  }
  function _Dyn___get_value__impl__bemnlg($this) {
    return $this;
  }
  function Dyn__toComparable_impl_pfql3z($this) {
    var tmp0_subject = _Dyn___get_value__impl__bemnlg($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = isComparable(0) ? 0 : THROW_CCE();
    } else {
      if (!(tmp0_subject == null) ? isComparable(tmp0_subject) : false) {
        var tmp_0 = _Dyn___get_value__impl__bemnlg($this);
        tmp = (!(tmp_0 == null) ? isComparable(tmp_0) : false) ? tmp_0 : THROW_CCE();
      } else {
        var tmp_1 = toString(_Dyn___get_value__impl__bemnlg($this));
        tmp = isComparable(tmp_1) ? tmp_1 : THROW_CCE();
      }
    }
    return tmp;
  }
  function Dyn__compareTo_impl_7znl52($this, other) {
    var l = $this;
    var r = other;
    var tmp;
    var tmp_0 = _Dyn___get_value__impl__bemnlg(l);
    if (isNumber(tmp_0)) {
      var tmp_1 = _Dyn___get_value__impl__bemnlg(r);
      tmp = isNumber(tmp_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      return compareTo(numberToDouble(_Dyn___get_value__impl__bemnlg(l)), numberToDouble(_Dyn___get_value__impl__bemnlg(r)));
    }
    var lc = Dyn__toComparable_impl_pfql3z(l);
    var rc = Dyn__toComparable_impl_pfql3z(r);
    return getKClassFromExpression(lc).j6(rc) ? compareTo(lc, rc) : -1;
  }
  function Dyn__compareTo_impl_7znl52_0($this, other) {
    return Dyn__compareTo_impl_7znl52($this.a2p_1, other instanceof Dyn ? other.a2p_1 : THROW_CCE());
  }
  function Dyn__toString_impl_9l0v3s($this) {
    return toString_2($this, _Dyn___get_value__impl__bemnlg($this));
  }
  function Companion_10() {
  }
  protoOf(Companion_10).b2p = function () {
    return get_dyn(get_dynApi().c2p());
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    return Companion_instance_16;
  }
  function Dyn__set_impl_2ozvx8($this, key, value) {
    var tmp0_subject = _Dyn___get_value__impl__bemnlg($this);
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, MutableMap) : false) {
      // Inline function 'kotlin.collections.set' call
      var tmp = _Dyn___get_value__impl__bemnlg($this);
      ((!(tmp == null) ? isInterface(tmp, MutableMap) : false) ? tmp : THROW_CCE()).x1(key, value);
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, MutableList) : false) {
        var tmp_0 = _Dyn___get_value__impl__bemnlg($this);
        ((!(tmp_0 == null) ? isInterface(tmp_0, MutableList) : false) ? tmp_0 : THROW_CCE()).m(Dyn__toInt_impl_nu3u6q(get_dyn(key)), value);
      } else {
        get_dynApi().d2p(_Dyn___get_value__impl__bemnlg($this), toString_1(key), value);
      }
    }
  }
  function Dyn__get_impl_6l2p80($this, key) {
    return Dyn__get_impl_6l2p80_0($this, _Dyn___get_value__impl__bemnlg(key));
  }
  function Dyn__get_impl_6l2p80_0($this, key) {
    return _getOrThrow($this, key, false);
  }
  function _getOrThrow($this, key, doThrow) {
    var tmp0_subject = _Dyn___get_value__impl__bemnlg($this);
    var tmp;
    if (tmp0_subject == null) {
      var tmp_0;
      if (doThrow) {
        throw NullPointerException_init_$Create$("Trying to access '" + toString_1(key) + "'");
      } else {
        tmp_0 = get_dyn(null);
      }
      tmp = tmp_0;
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
        var tmp_1 = _Dyn___get_value__impl__bemnlg($this);
        tmp = get_dyn(((!(tmp_1 == null) ? isInterface(tmp_1, Map) : false) ? tmp_1 : THROW_CCE()).d2(key));
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
          tmp = get_dyn(getOrNull(_Dyn___get_value__impl__bemnlg($this), Dyn__toInt_impl_nu3u6q(get_dyn(key))));
        } else {
          tmp = get_dyn(get_dynApi().e2p(_Dyn___get_value__impl__bemnlg($this), toString_1(key)));
        }
      }
    }
    return tmp;
  }
  function _Dyn___get_listAny__impl__vrilgp($this) {
    var tmp;
    if (_Dyn___get_value__impl__bemnlg($this) == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      var tmp_0 = _Dyn___get_value__impl__bemnlg($this);
      if (!(tmp_0 == null) ? isInterface(tmp_0, List) : false) {
        tmp = _Dyn___get_value__impl__bemnlg($this);
      } else {
        var tmp_1 = _Dyn___get_value__impl__bemnlg($this);
        if (!(tmp_1 == null) ? isInterface(tmp_1, Iterable) : false) {
          tmp = toList(_Dyn___get_value__impl__bemnlg($this));
        } else {
          tmp = listOf_0(_Dyn___get_value__impl__bemnlg($this));
        }
      }
    }
    return tmp;
  }
  function _Dyn___get_keysAny__impl__whx5cj($this) {
    var tmp;
    var tmp_0 = _Dyn___get_value__impl__bemnlg($this);
    if (!(tmp_0 == null) ? isInterface(tmp_0, Map) : false) {
      tmp = toList(_Dyn___get_value__impl__bemnlg($this).v1());
    } else {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    }
    return tmp;
  }
  function _Dyn___get_list__impl__qpwjp($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _Dyn___get_listAny__impl__vrilgp($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      // Inline function 'korlibs.io.dynamic.Dyn.<get-list>.<anonymous>' call
      var tmp$ret$0 = get_dyn(item);
      destination.p(new Dyn(tmp$ret$0));
    }
    return destination;
  }
  function _Dyn___get_keys__impl__o4xmor($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _Dyn___get_keysAny__impl__whx5cj($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      // Inline function 'korlibs.io.dynamic.Dyn.<get-keys>.<anonymous>' call
      var tmp$ret$0 = get_dyn(item);
      destination.p(new Dyn(tmp$ret$0));
    }
    return destination;
  }
  function Dyn__toNumber_impl_rlhtn4($this, $receiver) {
    var tmp = toIntOrNull($receiver);
    var tmp0_elvis_lhs = (tmp == null ? true : isNumber(tmp)) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? toDoubleOrNull($receiver) : tmp0_elvis_lhs;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      tmp_0 = NaN;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function Dyn__toNumber_impl_rlhtn4_0($this) {
    var tmp0_subject = _Dyn___get_value__impl__bemnlg($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = 0;
    } else {
      if (isNumber(tmp0_subject)) {
        tmp = _Dyn___get_value__impl__bemnlg($this);
      } else {
        if (!(tmp0_subject == null) ? typeof tmp0_subject === 'boolean' : false) {
          tmp = _Dyn___get_value__impl__bemnlg($this) ? 1 : 0;
        } else {
          if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
            var tmp1_elvis_lhs = toIntSafe(_Dyn___get_value__impl__bemnlg($this));
            var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? toDoubleSafe(_Dyn___get_value__impl__bemnlg($this)) : tmp1_elvis_lhs;
            tmp = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
          } else {
            tmp = Dyn__toNumber_impl_rlhtn4($this, toString(_Dyn___get_value__impl__bemnlg($this)));
          }
        }
      }
    }
    return tmp;
  }
  function toString_2($this, value) {
    var tmp;
    if (value == null) {
      tmp = '';
    } else {
      if (!(value == null) ? typeof value === 'string' : false) {
        tmp = value;
      } else {
        if (!(value == null) ? typeof value === 'number' : false) {
          var tmp_0;
          if (value === numberToInt(value)) {
            tmp_0 = numberToInt(value).toString();
          } else {
            tmp_0 = toString(value);
          }
          tmp = tmp_0;
        } else {
          if (!(value == null) ? isInterface(value, Iterable) : false) {
            tmp = '[' + joinToString(value, ', ', VOID, VOID, VOID, VOID, Dyn$toString$lambda($this)) + ']';
          } else {
            if (!(value == null) ? isInterface(value, Map) : false) {
              // Inline function 'kotlin.collections.map' call
              // Inline function 'kotlin.collections.mapTo' call
              var destination = ArrayList_init_$Create$_0(value.l());
              // Inline function 'kotlin.collections.iterator' call
              var tmp0_iterator = value.e2().s();
              while (tmp0_iterator.t()) {
                var item = tmp0_iterator.u();
                // Inline function 'korlibs.io.dynamic.Dyn.toString.<anonymous>' call
                var tmp$ret$1 = quote(toString_2($this, item.l3())) + ': ' + toString_2($this, item.p3());
                destination.p(tmp$ret$1);
              }
              tmp = '{' + joinToString(destination, ', ') + '}';
            } else {
              tmp = toString(value);
            }
          }
        }
      }
    }
    return tmp;
  }
  function Dyn__toInt_impl_nu3u6q($this) {
    return numberToInt(Dyn__toNumber_impl_rlhtn4_0($this));
  }
  function Dyn__toLong_impl_mq8zcz($this) {
    return numberToLong(Dyn__toNumber_impl_rlhtn4_0($this));
  }
  function Dyn__toBoolOrNull_impl_2dk92d($this) {
    var tmp0_subject = _Dyn___get_value__impl__bemnlg($this);
    var tmp;
    if (!(tmp0_subject == null) ? typeof tmp0_subject === 'boolean' : false) {
      tmp = _Dyn___get_value__impl__bemnlg($this);
    } else {
      if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
        tmp = (equals(_Dyn___get_value__impl__bemnlg($this), '1') ? true : equals(_Dyn___get_value__impl__bemnlg($this), 'true')) ? true : equals(_Dyn___get_value__impl__bemnlg($this), 'on');
      } else {
        if (isNumber(tmp0_subject)) {
          tmp = !(Dyn__toInt_impl_nu3u6q($this) === 0);
        } else {
          tmp = null;
        }
      }
    }
    return tmp;
  }
  function Dyn__toLongOrNull_impl_ws7y8j($this) {
    var tmp0_subject = _Dyn___get_value__impl__bemnlg($this);
    var tmp;
    if (isNumber(tmp0_subject)) {
      tmp = Dyn__toLong_impl_mq8zcz($this);
    } else {
      if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
        tmp = toLongSafe(_Dyn___get_value__impl__bemnlg($this));
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function Dyn__toLongDefault_impl_auunl0($this, default_0) {
    var tmp0_subject = _Dyn___get_value__impl__bemnlg($this);
    var tmp;
    if (isNumber(tmp0_subject)) {
      tmp = Dyn__toLong_impl_mq8zcz($this);
    } else {
      if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
        var tmp1_elvis_lhs = toLongSafe(_Dyn___get_value__impl__bemnlg($this), 10);
        tmp = tmp1_elvis_lhs == null ? default_0 : tmp1_elvis_lhs;
      } else {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function Dyn__toLongDefault$default_impl_w5acm9($this, default_0, $super) {
    default_0 = default_0 === VOID ? new Long(0, 0) : default_0;
    return $super === VOID ? Dyn__toLongDefault_impl_auunl0($this, default_0) : $super.f2p.call(new Dyn($this), default_0);
  }
  function _Dyn___get_str__impl__dup4cs($this) {
    return Dyn__toString_impl_9l0v3s($this);
  }
  function _Dyn___get_bool__impl__nv3iun($this) {
    var tmp0_elvis_lhs = Dyn__toBoolOrNull_impl_2dk92d($this);
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  }
  function _Dyn___get_long__impl__wdxl7n($this) {
    return Dyn__toLongDefault$default_impl_w5acm9($this);
  }
  function Dyn__hashCode_impl_vc6rwn($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function Dyn__equals_impl_sp125n($this, other) {
    if (!(other instanceof Dyn))
      return false;
    var tmp0_other_with_cast = other instanceof Dyn ? other.a2p_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Dyn$toString$lambda(this$0) {
    return function (it) {
      return toString_2(this$0, it);
    };
  }
  function Dyn(value) {
    this.a2p_1 = value;
  }
  protoOf(Dyn).g2p = function (other) {
    return Dyn__compareTo_impl_7znl52(this.a2p_1, other);
  };
  protoOf(Dyn).d = function (other) {
    return Dyn__compareTo_impl_7znl52_0(this, other);
  };
  protoOf(Dyn).toString = function () {
    return Dyn__toString_impl_9l0v3s(this.a2p_1);
  };
  protoOf(Dyn).hashCode = function () {
    return Dyn__hashCode_impl_vc6rwn(this.a2p_1);
  };
  protoOf(Dyn).equals = function (other) {
    return Dyn__equals_impl_sp125n(this.a2p_1, other);
  };
  function get_dyn(_this__u8e3s4) {
    return _Dyn___init__impl__6cuxxc(_this__u8e3s4);
  }
  function toIntSafe(_this__u8e3s4, radix) {
    radix = radix === VOID ? 10 : radix;
    return toIntOrNull_0(_this__u8e3s4, radix);
  }
  function toDoubleSafe(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4);
  }
  function toLongSafe(_this__u8e3s4, radix) {
    radix = radix === VOID ? 10 : radix;
    return toLongOrNull(_this__u8e3s4, radix);
  }
  function get_dynApi() {
    _init_properties_DynApi_kt__g2fyyp();
    return dynApi;
  }
  var dynApi;
  function DynApi() {
  }
  var properties_initialized_DynApi_kt_kcoydf;
  function _init_properties_DynApi_kt__g2fyyp() {
    if (!properties_initialized_DynApi_kt_kcoydf) {
      properties_initialized_DynApi_kt_kcoydf = true;
      dynApi = DynamicInternal_instance;
    }
  }
  function get_extensionLC(_this__u8e3s4) {
    // Inline function 'kotlin.text.toLowerCase' call
    // Inline function 'kotlin.js.asDynamic' call
    return get_extension(_this__u8e3s4).toLowerCase();
  }
  function _PathInfo___init__impl__vpw96a(fullPath) {
    return fullPath;
  }
  function _PathInfo___get_fullPath__impl__21fx6x($this) {
    return $this;
  }
  function get_baseName(_this__u8e3s4) {
    return get_baseName_0(_this__u8e3s4.h2p());
  }
  function get_extension(_this__u8e3s4) {
    return substringAfterLast(get_baseName_0(_this__u8e3s4), _Char___init__impl__6a9atx(46), '');
  }
  function get_baseName_0(_this__u8e3s4) {
    return substringAfterLast(get_fullPathNormalized(_this__u8e3s4), _Char___init__impl__6a9atx(47));
  }
  function get_fullPathNormalized(_this__u8e3s4) {
    return replace(_PathInfo___get_fullPath__impl__21fx6x(_this__u8e3s4), _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(47));
  }
  function VfsNamed(pathInfo) {
    this.i2p_1 = pathInfo;
  }
  protoOf(VfsNamed).h2p = function () {
    return this.i2p_1;
  };
  function get_pathInfo(_this__u8e3s4) {
    return _PathInfo___init__impl__vpw96a(_this__u8e3s4);
  }
  function combine(_this__u8e3s4, access) {
    var base = _PathInfo___get_fullPath__impl__21fx6x(_this__u8e3s4);
    var access_0 = _PathInfo___get_fullPath__impl__21fx6x(access);
    return get_pathInfo(isAbsolute(get_pathInfo(access_0)) ? normalize(get_pathInfo(access_0)) : normalize(get_pathInfo(base + '/' + access_0)));
  }
  function normalize(_this__u8e3s4, removeEndSlash) {
    removeEndSlash = removeEndSlash === VOID ? true : removeEndSlash;
    var path = _PathInfo___get_fullPath__impl__21fx6x(_this__u8e3s4);
    var schemeIndex = indexOf(path, ':');
    var tmp;
    if (schemeIndex >= 0) {
      var tmp_0;
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = path.substring(schemeIndex);
      if (startsWith(tmp$ret$1, '://')) {
        tmp_0 = 3;
      } else {
        tmp_0 = 1;
      }
      var take = tmp_0;
      // Inline function 'kotlin.text.substring' call
      var endIndex = schemeIndex + take | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = path.substring(0, endIndex);
      // Inline function 'kotlin.text.substring' call
      var startIndex = schemeIndex + take | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = path.substring(startIndex);
      tmp = tmp_1 + normalize(get_pathInfo(tmp$ret$5), removeEndSlash);
    } else {
      var path2 = replace(path, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(47));
      var out = ArrayList_init_$Create$();
      var path2PathLength;
      // Inline function 'korlibs.datastructure.iterators.fastForEachWithIndex' call
      // Inline function 'kotlin.also' call
      var this_0 = split(path2, ['/']);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.io.file.normalize.<anonymous>' call
      path2PathLength = this_0.l();
      var n = 0;
      while (n < this_0.l()) {
        // Inline function 'korlibs.io.file.normalize.<anonymous>' call
        var index = n;
        var part = this_0.b1(n);
        switch (part) {
          case '':
            if (out.x() ? true : !removeEndSlash) {
              // Inline function 'kotlin.collections.plusAssign' call
              out.p('');
            }

            break;
          case '.':
            if (index === (path2PathLength - 1 | 0) ? !removeEndSlash : false) {
              // Inline function 'kotlin.collections.plusAssign' call
              out.p('');
            }

            break;
          case '..':
            var tmp_2;
            // Inline function 'kotlin.collections.isNotEmpty' call

            if (!out.x()) {
              tmp_2 = !(index === 1);
            } else {
              tmp_2 = false;
            }

            if (tmp_2) {
              out.e1(out.l() - 1 | 0);
            }

            break;
          default:
            // Inline function 'kotlin.collections.plusAssign' call

            out.p(part);
            break;
        }
        n = n + 1 | 0;
      }
      tmp = joinToString(out, '/');
    }
    return tmp;
  }
  function get_parent(_this__u8e3s4) {
    return _PathInfo___init__impl__vpw96a(get_folder(_this__u8e3s4));
  }
  function get_extensionLC_0(_this__u8e3s4) {
    return get_extensionLC(_this__u8e3s4.h2p());
  }
  function get_folder(_this__u8e3s4) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = _PathInfo___get_fullPath__impl__21fx6x(_this__u8e3s4);
    var tmp0_elvis_lhs = lastIndexOfOrNull(get_fullPathNormalized(_this__u8e3s4), _Char___init__impl__6a9atx(47));
    var endIndex = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.substring(0, endIndex);
  }
  function isAbsolute(_this__u8e3s4) {
    var base = _PathInfo___get_fullPath__impl__21fx6x(_this__u8e3s4);
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(base) === 0)
      return false;
    var b = substringBefore(replace(base, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(47)), _Char___init__impl__6a9atx(47));
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(b) === 0)
      return true;
    if (contains(b, _Char___init__impl__6a9atx(58)))
      return true;
    return false;
  }
  function lightCombine(_this__u8e3s4, access) {
    var base = _PathInfo___get_fullPath__impl__21fx6x(_this__u8e3s4);
    var access_0 = _PathInfo___get_fullPath__impl__21fx6x(access);
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(base) > 0) {
      tmp = trimEnd(base, charArrayOf([_Char___init__impl__6a9atx(47)])) + '/' + trim_0(access_0, charArrayOf([_Char___init__impl__6a9atx(47)]));
    } else {
      tmp = access_0;
    }
    var res = tmp;
    return get_pathInfo(res);
  }
  function Vfs$Proxy$initOnce$slambda(this$0, resultContinuation) {
    this.r2p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Vfs$Proxy$initOnce$slambda).s2p = function ($completion) {
    var tmp = this.j2m($completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(Vfs$Proxy$initOnce$slambda).xc = function ($completion) {
    return this.s2p($completion);
  };
  protoOf(Vfs$Proxy$initOnce$slambda).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.r2p_1.v2p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.cc_1 = 3;
            this.bc_1 = 4;
            continue $sm;
          case 2:
            this.cc_1 = 3;
            var tmp_0 = this.ec_1;
            if (tmp_0 instanceof Error) {
              var e = this.ec_1;
              var this_0 = this.r2p_1.t2p_1;
              var level = Level_ERROR_getInstance();
              if (this_0.w17(level)) {
                this_0.x17(level, 'Error initializing ' + this.r2p_1);
              }
              printStackTrace(e);
              this.bc_1 = 4;
              continue $sm;
            } else {
              throw this.ec_1;
            }

          case 3:
            throw this.ec_1;
          case 4:
            this.cc_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.cc_1 === 3) {
          throw e_0;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Vfs$Proxy$initOnce$slambda).j2m = function (completion) {
    return new Vfs$Proxy$initOnce$slambda(this.r2p_1, completion);
  };
  function Vfs$Proxy$initOnce$slambda_0(this$0, resultContinuation) {
    var i = new Vfs$Proxy$initOnce$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s2p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getUnderlyingUnscapedFileCOROUTINE$118(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e2q_1 = _this__u8e3s4;
    this.f2q_1 = path;
  }
  protoOf($getUnderlyingUnscapedFileCOROUTINE$118).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            this.bc_1 = 1;
            suspendResult = this.e2q_1.i2q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g2q_1 = suspendResult;
            this.bc_1 = 2;
            suspendResult = this.g2q_1.j2q(this.f2q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h2q_1 = suspendResult;
            this.bc_1 = 3;
            suspendResult = this.h2q_1.u2k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return suspendResult;
          case 4:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 4) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $initOnceCOROUTINE$119(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s2q_1 = _this__u8e3s4;
  }
  protoOf($initOnceCOROUTINE$119).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            if (this.s2q_1.u2p_1 == null) {
              var tmp_0 = this.s2q_1;
              var tmp_1 = this.b6();
              tmp_0.u2p_1 = async_0(tmp_1, Vfs$Proxy$initOnce$slambda_0(this.s2q_1, null));
            }

            this.bc_1 = 1;
            suspendResult = ensureNotNull(this.s2q_1.u2p_1).am(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.s2q_1;
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $openCOROUTINE$121(_this__u8e3s4, path, mode, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b2r_1 = _this__u8e3s4;
    this.c2r_1 = path;
    this.d2r_1 = mode;
  }
  protoOf($openCOROUTINE$121).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            this.bc_1 = 1;
            suspendResult = this.b2r_1.i2q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e2r_1 = suspendResult;
            this.bc_1 = 2;
            suspendResult = this.e2r_1.j2q(this.c2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f2r_1 = suspendResult;
            this.bc_1 = 3;
            suspendResult = this.f2r_1.g2r(this.d2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return suspendResult;
          case 4:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 4) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readRangeCOROUTINE$122(_this__u8e3s4, path, range, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p2r_1 = _this__u8e3s4;
    this.q2r_1 = path;
    this.r2r_1 = range;
  }
  protoOf($readRangeCOROUTINE$122).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            this.bc_1 = 1;
            suspendResult = this.p2r_1.i2q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s2r_1 = suspendResult;
            this.bc_1 = 2;
            suspendResult = this.s2r_1.j2q(this.q2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t2r_1 = suspendResult;
            this.bc_1 = 3;
            suspendResult = this.t2r_1.u2r(this.r2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return suspendResult;
          case 4:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 4) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $statCOROUTINE$125(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d2s_1 = _this__u8e3s4;
    this.e2s_1 = path;
  }
  protoOf($statCOROUTINE$125).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            this.bc_1 = 1;
            suspendResult = this.d2s_1.i2q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f2s_1 = suspendResult;
            this.bc_1 = 2;
            suspendResult = this.f2s_1.j2q(this.e2s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g2s_1 = suspendResult;
            this.bc_1 = 3;
            suspendResult = this.g2s_1.h2s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            return ARGUMENT.y2s(this.d2s_1.h2j(this.e2s_1));
          case 4:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 4) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function unsupported($this) {
    unsupported_0('unsupported for ' + getKClassFromExpression($this) + ' : ' + $this);
  }
  function Proxy() {
    Vfs.call(this);
    this.t2p_1 = Companion_getInstance_2().i17('Vfs.Proxy');
    this.u2p_1 = null;
  }
  protoOf(Proxy).z2s = function (path, $completion) {
    var tmp = new $getUnderlyingUnscapedFileCOROUTINE$118(this, path, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(Proxy).v2p = function ($completion) {
    return Unit_instance;
  };
  protoOf(Proxy).i2q = function ($completion) {
    var tmp = new $initOnceCOROUTINE$119(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(Proxy).a2t = function (path, mode, $completion) {
    var tmp = new $openCOROUTINE$121(this, path, mode, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(Proxy).b2t = function (path, range, $completion) {
    var tmp = new $readRangeCOROUTINE$122(this, path, range, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(Proxy).c2t = function (path, $completion) {
    var tmp = new $statCOROUTINE$125(this, path, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  function $readRangeCOROUTINE$109(_this__u8e3s4, path, range, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t2t_1 = _this__u8e3s4;
    this.u2t_1 = path;
    this.v2t_1 = range;
  }
  protoOf($readRangeCOROUTINE$109).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 6;
            this.bc_1 = 1;
            suspendResult = this.t2t_1.a2t(this.u2t_1, VfsOpenMode_READ_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w2t_1 = suspendResult;
            this.x2t_1 = null;
            this.cc_1 = 3;
            var tmp_0 = this;
            tmp_0.z2t_1 = this.w2t_1;
            this.z2t_1.d2u_1 = this.v2t_1.n8();
            this.bc_1 = 2;
            var a = toLong(IntCompanionObject_instance.MAX_VALUE).ia(toLong(1));
            var b = this.v2t_1.o8().ia(this.v2t_1.n8());
            suspendResult = readBytesUpTo(this.z2t_1, (a.g6(b) <= 0 ? a : b).qa() + 1 | 0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y2t_1 = suspendResult;
            this.cc_1 = 6;
            this.bc_1 = 4;
            continue $sm;
          case 3:
            this.cc_1 = 6;
            var tmp_1 = this.ec_1;
            if (tmp_1 instanceof Error) {
              this.a2u_1 = this.ec_1;
              var tmp_2 = this;
              this.x2t_1 = this.a2u_1;
              tmp_2.y2t_1 = null;
              this.bc_1 = 4;
              continue $sm;
            } else {
              throw this.ec_1;
            }

          case 4:
            this.cc_1 = 6;
            this.b2u_1 = this.y2t_1;
            this.bc_1 = 5;
            suspendResult = this.w2t_1.g2t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!(this.x2t_1 == null))
              throw this.x2t_1;
            var tmp_3 = this.b2u_1;
            return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          case 6:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 6) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function Vfs() {
  }
  protoOf(Vfs).d2t = function () {
    return '';
  };
  protoOf(Vfs).e2t = function (path) {
    return _PathInfo___get_fullPath__impl__21fx6x(lightCombine(get_pathInfo(this.d2t()), get_pathInfo(path)));
  };
  protoOf(Vfs).f2t = function () {
    return new VfsFile(this, '');
  };
  protoOf(Vfs).e15 = function (path) {
    return this.f2t().e15(path);
  };
  protoOf(Vfs).h2j = function (path) {
    return this.f2t().e15(path);
  };
  protoOf(Vfs).g2t = function ($completion) {
    return Unit_instance;
  };
  protoOf(Vfs).h2t = function (path, isDirectory, size, device, inode, mode, owner, group, createTime, modifiedTime, lastAccessTime, extraInfo, id, cache) {
    // Inline function 'kotlin.also' call
    var this_0 = new VfsStat(this.h2j(path), true, isDirectory, size, device, inode, mode, owner, group, createTime, modifiedTime, lastAccessTime, extraInfo, VOID, id);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.file.Vfs.createExistsStat.<anonymous>' call
    if (cache)
      this_0.i2s_1.u2d_1 = this_0;
    return this_0;
  };
  protoOf(Vfs).i2t = function (path, isDirectory, size, device, inode, mode, owner, group, createTime, modifiedTime, lastAccessTime, extraInfo, id, cache, $super) {
    device = device === VOID ? new Long(-1, -1) : device;
    inode = inode === VOID ? new Long(-1, -1) : inode;
    mode = mode === VOID ? 511 : mode;
    owner = owner === VOID ? 'nobody' : owner;
    group = group === VOID ? 'nobody' : group;
    createTime = createTime === VOID ? Companion_getInstance_3().wh_1 : createTime;
    modifiedTime = modifiedTime === VOID ? Companion_getInstance_3().wh_1 : modifiedTime;
    lastAccessTime = lastAccessTime === VOID ? modifiedTime : lastAccessTime;
    extraInfo = extraInfo === VOID ? null : extraInfo;
    id = id === VOID ? null : id;
    cache = cache === VOID ? false : cache;
    return $super === VOID ? this.h2t(path, isDirectory, size, device, inode, mode, owner, group, createTime, modifiedTime, lastAccessTime, extraInfo, id, cache) : $super.h2t.call(this, path, isDirectory, size, device, inode, mode, owner, group, new DateTime(createTime), new DateTime(modifiedTime), new DateTime(lastAccessTime), extraInfo, id, cache);
  };
  protoOf(Vfs).j2t = function (path, extraInfo, cache, exception) {
    return new VfsStat(this.h2j(path), false, false, new Long(0, 0), new Long(-1, -1), new Long(-1, -1), 511, 'nobody', 'nobody', Companion_getInstance_3().wh_1, Companion_getInstance_3().wh_1, Companion_getInstance_3().wh_1, extraInfo, VOID, VOID, exception);
  };
  protoOf(Vfs).k2t = function (path, extraInfo, cache, exception, $super) {
    extraInfo = extraInfo === VOID ? null : extraInfo;
    cache = cache === VOID ? false : cache;
    exception = exception === VOID ? null : exception;
    return $super === VOID ? this.j2t(path, extraInfo, cache, exception) : $super.j2t.call(this, path, extraInfo, cache, exception);
  };
  protoOf(Vfs).a2t = function (path, mode, $completion) {
    unsupported(this);
  };
  protoOf(Vfs).b2t = function (path, range, $completion) {
    var tmp = new $readRangeCOROUTINE$109(this, path, range, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(Vfs).c2t = function (path, $completion) {
    return this.k2t(path);
  };
  protoOf(Vfs).z2s = function (path, $completion) {
    return FinalVfsFile_init_$Create$(this, path);
  };
  protoOf(Vfs).toString = function () {
    return get_portableSimpleName(getKClassFromExpression(this));
  };
  function VfsStat(file, exists, isDirectory, size, device, inode, mode, owner, group, createTime, modifiedTime, lastAccessTime, extraInfo, kind, id, exception) {
    device = device === VOID ? new Long(-1, -1) : device;
    inode = inode === VOID ? new Long(-1, -1) : inode;
    mode = mode === VOID ? 511 : mode;
    owner = owner === VOID ? 'nobody' : owner;
    group = group === VOID ? 'nobody' : group;
    createTime = createTime === VOID ? Companion_getInstance_3().wh_1 : createTime;
    modifiedTime = modifiedTime === VOID ? createTime : modifiedTime;
    lastAccessTime = lastAccessTime === VOID ? modifiedTime : lastAccessTime;
    extraInfo = extraInfo === VOID ? null : extraInfo;
    kind = kind === VOID ? null : kind;
    id = id === VOID ? null : id;
    exception = exception === VOID ? null : exception;
    this.i2s_1 = file;
    this.j2s_1 = exists;
    this.k2s_1 = isDirectory;
    this.l2s_1 = size;
    this.m2s_1 = device;
    this.n2s_1 = inode;
    this.o2s_1 = mode;
    this.p2s_1 = owner;
    this.q2s_1 = group;
    this.r2s_1 = createTime;
    this.s2s_1 = modifiedTime;
    this.t2s_1 = lastAccessTime;
    this.u2s_1 = extraInfo;
    this.v2s_1 = kind;
    this.w2s_1 = id;
    this.x2s_1 = exception;
  }
  protoOf(VfsStat).h2p = function () {
    return this.i2s_1.h2p();
  };
  protoOf(VfsStat).i2u = function (showFile) {
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$_0(16);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.file.VfsStat.toString.<anonymous>' call
    if (showFile) {
      this_0.p('file=' + this.i2s_1);
    } else {
      this_0.p('file=' + this.i2s_1.d2t());
    }
    this_0.p('exists=' + this.j2s_1);
    this_0.p('isDirectory=' + this.k2s_1);
    this_0.p('size=' + this.l2s_1.toString());
    this_0.p('device=' + this.m2s_1.toString());
    this_0.p('inode=' + this.n2s_1.toString());
    this_0.p('mode=' + this.o2s_1);
    this_0.p('owner=' + this.p2s_1);
    this_0.p('group=' + this.q2s_1);
    this_0.p('createTime=' + new DateTime(this.r2s_1));
    this_0.p('modifiedTime=' + new DateTime(this.s2s_1));
    this_0.p('lastAccessTime=' + new DateTime(this.t2s_1));
    this_0.p('extraInfo=' + toString_1(this.u2s_1));
    if (!(this.v2s_1 == null)) {
      this_0.p('kind=' + this.v2s_1);
    }
    this_0.p('id=' + this.w2s_1);
    return 'VfsStat(' + joinToString(this_0, ', ') + ')';
  };
  protoOf(VfsStat).toString = function () {
    return this.i2u(true);
  };
  protoOf(VfsStat).j2u = function (file, exists, isDirectory, size, device, inode, mode, owner, group, createTime, modifiedTime, lastAccessTime, extraInfo, kind, id, exception) {
    return new VfsStat(file, exists, isDirectory, size, device, inode, mode, owner, group, createTime, modifiedTime, lastAccessTime, extraInfo, kind, id, exception);
  };
  protoOf(VfsStat).y2s = function (file, exists, isDirectory, size, device, inode, mode, owner, group, createTime, modifiedTime, lastAccessTime, extraInfo, kind, id, exception, $super) {
    file = file === VOID ? this.i2s_1 : file;
    exists = exists === VOID ? this.j2s_1 : exists;
    isDirectory = isDirectory === VOID ? this.k2s_1 : isDirectory;
    size = size === VOID ? this.l2s_1 : size;
    device = device === VOID ? this.m2s_1 : device;
    inode = inode === VOID ? this.n2s_1 : inode;
    mode = mode === VOID ? this.o2s_1 : mode;
    owner = owner === VOID ? this.p2s_1 : owner;
    group = group === VOID ? this.q2s_1 : group;
    createTime = createTime === VOID ? this.r2s_1 : createTime;
    modifiedTime = modifiedTime === VOID ? this.s2s_1 : modifiedTime;
    lastAccessTime = lastAccessTime === VOID ? this.t2s_1 : lastAccessTime;
    extraInfo = extraInfo === VOID ? this.u2s_1 : extraInfo;
    kind = kind === VOID ? this.v2s_1 : kind;
    id = id === VOID ? this.w2s_1 : id;
    exception = exception === VOID ? this.x2s_1 : exception;
    return $super === VOID ? this.j2u(file, exists, isDirectory, size, device, inode, mode, owner, group, createTime, modifiedTime, lastAccessTime, extraInfo, kind, id, exception) : $super.j2u.call(this, file, exists, isDirectory, size, device, inode, mode, owner, group, new DateTime(createTime), new DateTime(modifiedTime), new DateTime(lastAccessTime), extraInfo, kind, id, exception);
  };
  protoOf(VfsStat).hashCode = function () {
    var result = this.i2s_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.j2s_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.k2s_1) | 0;
    result = imul(result, 31) + this.l2s_1.hashCode() | 0;
    result = imul(result, 31) + this.m2s_1.hashCode() | 0;
    result = imul(result, 31) + this.n2s_1.hashCode() | 0;
    result = imul(result, 31) + this.o2s_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.p2s_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q2s_1) | 0;
    result = imul(result, 31) + DateTime__hashCode_impl_yf0bc9(this.r2s_1) | 0;
    result = imul(result, 31) + DateTime__hashCode_impl_yf0bc9(this.s2s_1) | 0;
    result = imul(result, 31) + DateTime__hashCode_impl_yf0bc9(this.t2s_1) | 0;
    result = imul(result, 31) + (this.u2s_1 == null ? 0 : hashCode(this.u2s_1)) | 0;
    result = imul(result, 31) + (this.v2s_1 == null ? 0 : hashCode(this.v2s_1)) | 0;
    result = imul(result, 31) + (this.w2s_1 == null ? 0 : getStringHashCode(this.w2s_1)) | 0;
    result = imul(result, 31) + (this.x2s_1 == null ? 0 : hashCode(this.x2s_1)) | 0;
    return result;
  };
  protoOf(VfsStat).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VfsStat))
      return false;
    var tmp0_other_with_cast = other instanceof VfsStat ? other : THROW_CCE();
    if (!this.i2s_1.equals(tmp0_other_with_cast.i2s_1))
      return false;
    if (!(this.j2s_1 === tmp0_other_with_cast.j2s_1))
      return false;
    if (!(this.k2s_1 === tmp0_other_with_cast.k2s_1))
      return false;
    if (!this.l2s_1.equals(tmp0_other_with_cast.l2s_1))
      return false;
    if (!this.m2s_1.equals(tmp0_other_with_cast.m2s_1))
      return false;
    if (!this.n2s_1.equals(tmp0_other_with_cast.n2s_1))
      return false;
    if (!(this.o2s_1 === tmp0_other_with_cast.o2s_1))
      return false;
    if (!(this.p2s_1 === tmp0_other_with_cast.p2s_1))
      return false;
    if (!(this.q2s_1 === tmp0_other_with_cast.q2s_1))
      return false;
    if (!equals(this.r2s_1, tmp0_other_with_cast.r2s_1))
      return false;
    if (!equals(this.s2s_1, tmp0_other_with_cast.s2s_1))
      return false;
    if (!equals(this.t2s_1, tmp0_other_with_cast.t2s_1))
      return false;
    if (!equals(this.u2s_1, tmp0_other_with_cast.u2s_1))
      return false;
    if (!equals(this.v2s_1, tmp0_other_with_cast.v2s_1))
      return false;
    if (!(this.w2s_1 == tmp0_other_with_cast.w2s_1))
      return false;
    if (!equals(this.x2s_1, tmp0_other_with_cast.x2s_1))
      return false;
    return true;
  };
  var VfsOpenMode_READ_instance;
  var VfsOpenMode_WRITE_instance;
  var VfsOpenMode_APPEND_instance;
  var VfsOpenMode_CREATE_OR_TRUNCATE_instance;
  var VfsOpenMode_CREATE_instance;
  var VfsOpenMode_CREATE_NEW_instance;
  var VfsOpenMode_entriesInitialized;
  function VfsOpenMode_initEntries() {
    if (VfsOpenMode_entriesInitialized)
      return Unit_instance;
    VfsOpenMode_entriesInitialized = true;
    VfsOpenMode_READ_instance = new VfsOpenMode('READ', 0, 'rb', false);
    VfsOpenMode_WRITE_instance = new VfsOpenMode('WRITE', 1, 'r+b', true, true);
    VfsOpenMode_APPEND_instance = new VfsOpenMode('APPEND', 2, 'a+b', true, true, VOID, VOID, true);
    VfsOpenMode_CREATE_OR_TRUNCATE_instance = new VfsOpenMode('CREATE_OR_TRUNCATE', 3, 'w+b', true, true, true);
    VfsOpenMode_CREATE_instance = new VfsOpenMode('CREATE', 4, 'w+b', true, true);
    VfsOpenMode_CREATE_NEW_instance = new VfsOpenMode('CREATE_NEW', 5, 'w+b', true);
  }
  function VfsOpenMode(name, ordinal, cmode, write, createIfNotExists, truncate, read, append, createNew) {
    createIfNotExists = createIfNotExists === VOID ? false : createIfNotExists;
    truncate = truncate === VOID ? false : truncate;
    read = read === VOID ? true : read;
    append = append === VOID ? false : append;
    createNew = createNew === VOID ? false : createNew;
    Enum.call(this, name, ordinal);
    this.m2u_1 = cmode;
    this.n2u_1 = write;
    this.o2u_1 = createIfNotExists;
    this.p2u_1 = truncate;
    this.q2u_1 = read;
    this.r2u_1 = append;
    this.s2u_1 = createNew;
  }
  function Companion_11() {
  }
  var Companion_instance_17;
  function Companion_getInstance_18() {
    return Companion_instance_17;
  }
  function VfsCachedStatContext(stat) {
    this.t2u_1 = stat;
  }
  protoOf(VfsCachedStatContext).l3 = function () {
    return Companion_instance_17;
  };
  function VfsOpenMode_READ_getInstance() {
    VfsOpenMode_initEntries();
    return VfsOpenMode_READ_instance;
  }
  function $readStringCOROUTINE$140(_this__u8e3s4, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c2v_1 = _this__u8e3s4;
    this.d2v_1 = charset;
  }
  protoOf($readStringCOROUTINE$140).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.c2v_1.e2v(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return toString_3(ARGUMENT, this.d2v_1);
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readAsSyncStreamCOROUTINE$142(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n2v_1 = _this__u8e3s4;
  }
  protoOf($readAsSyncStreamCOROUTINE$142).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.n2v_1.e2v(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return openSync(ARGUMENT);
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $statCOROUTINE$143(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w2v_1 = _this__u8e3s4;
  }
  protoOf($statCOROUTINE$143).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.x2v_1 = this.w2v_1.u2d_1;
            if (this.x2v_1 == null) {
              this.bc_1 = 1;
              suspendResult = this.w2v_1.r2d_1.c2t(this.w2v_1.s2d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y2v_1 = this.x2v_1;
              this.bc_1 = 2;
              continue $sm;
            }

          case 1:
            this.y2v_1 = suspendResult;
            this.bc_1 = 2;
            continue $sm;
          case 2:
            return this.y2v_1;
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function VfsFile(vfs, path) {
    VfsNamed.call(this, get_pathInfo(path));
    this.r2d_1 = vfs;
    this.s2d_1 = path;
    this.t2d_1 = new Mixin();
    this.u2d_1 = null;
  }
  protoOf(VfsFile).u14 = function (_set____db54di) {
    this.t2d_1.u14(_set____db54di);
  };
  protoOf(VfsFile).v14 = function () {
    return this.t2d_1.v14();
  };
  protoOf(VfsFile).f2t = function () {
    return this.r2d_1.f2t();
  };
  protoOf(VfsFile).d2t = function () {
    return this.r2d_1.e2t(this.s2d_1);
  };
  protoOf(VfsFile).e15 = function (path) {
    return new VfsFile(this.r2d_1, _PathInfo___get_fullPath__impl__21fx6x(combine(get_pathInfo(this.s2d_1), get_pathInfo(path))));
  };
  protoOf(VfsFile).g2r = function (mode, $completion) {
    return this.r2d_1.a2t(this.s2d_1, mode, $completion);
  };
  protoOf(VfsFile).u2r = function (range, $completion) {
    return this.r2d_1.b2t(this.s2d_1, range, $completion);
  };
  protoOf(VfsFile).z2v = function ($completion) {
    return this.r2d_1.b2t(this.s2d_1, get_LONG_ZERO_TO_MAX_RANGE(), $completion);
  };
  protoOf(VfsFile).e2v = function ($completion) {
    return this.z2v($completion);
  };
  protoOf(VfsFile).i2j = function ($completion) {
    return this.z2v($completion);
  };
  protoOf(VfsFile).a2w = function (charset, $completion) {
    var tmp = new $readStringCOROUTINE$140(this, charset, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(VfsFile).b2w = function (charset, $completion, $super) {
    charset = charset === VOID ? get_UTF8() : charset;
    return $super === VOID ? this.a2w(charset, $completion) : $super.a2w.call(this, charset, $completion);
  };
  protoOf(VfsFile).v2d = function ($completion) {
    var tmp = new $readAsSyncStreamCOROUTINE$142(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(VfsFile).h2s = function ($completion) {
    var tmp = new $statCOROUTINE$143(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(VfsFile).c2w = function () {
    return Companion_instance_18.d2w(this);
  };
  protoOf(VfsFile).u2k = function ($completion) {
    return this.r2d_1.z2s(this.s2d_1, $completion);
  };
  protoOf(VfsFile).toString = function () {
    return '' + this.r2d_1 + '[' + this.s2d_1 + ']';
  };
  protoOf(VfsFile).hashCode = function () {
    var result = hashCode(this.r2d_1);
    result = imul(result, 31) + getStringHashCode(this.s2d_1) | 0;
    return result;
  };
  protoOf(VfsFile).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VfsFile))
      return false;
    var tmp0_other_with_cast = other instanceof VfsFile ? other : THROW_CCE();
    if (!equals(this.r2d_1, tmp0_other_with_cast.r2d_1))
      return false;
    if (!(this.s2d_1 === tmp0_other_with_cast.s2d_1))
      return false;
    return true;
  };
  function FinalVfsFile_init_$Init$(vfs, path, $this) {
    FinalVfsFile.call($this, vfs.e15(path));
    return $this;
  }
  function FinalVfsFile_init_$Create$(vfs, path) {
    return FinalVfsFile_init_$Init$(vfs, path, objectCreate(protoOf(FinalVfsFile)));
  }
  function FinalVfsFile(file) {
    this.f2k_1 = file;
  }
  protoOf(FinalVfsFile).g2k = function () {
    return this.f2k_1.r2d_1;
  };
  protoOf(FinalVfsFile).h2k = function () {
    return this.f2k_1.s2d_1;
  };
  protoOf(FinalVfsFile).toString = function () {
    return 'FinalVfsFile(file=' + this.f2k_1 + ')';
  };
  protoOf(FinalVfsFile).hashCode = function () {
    return this.f2k_1.hashCode();
  };
  protoOf(FinalVfsFile).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FinalVfsFile))
      return false;
    var tmp0_other_with_cast = other instanceof FinalVfsFile ? other : THROW_CCE();
    if (!this.f2k_1.equals(tmp0_other_with_cast.f2k_1))
      return false;
    return true;
  };
  function withCatalogJail(_this__u8e3s4) {
    return (new CatalogVfs(_this__u8e3s4.c2w())).f2t();
  }
  function $getLengthCOROUTINE$163(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m2w_1 = _this__u8e3s4;
  }
  protoOf($getLengthCOROUTINE$163).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            var tmp0_safe_receiver = this.m2w_1.p2w_1;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2s_1) === true) {
              this.n2w_1 = this.m2w_1.p2w_1.l2s_1;
              this.bc_1 = 2;
              continue $sm;
            } else {
              this.bc_1 = 1;
              suspendResult = this.m2w_1.o2w_1.q2w(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.n2w_1 = suspendResult;
            this.bc_1 = 2;
            continue $sm;
          case 2:
            return this.n2w_1;
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function CatalogVfs$open$slambda(this$0, $path, $mode, resultContinuation) {
    this.z2w_1 = this$0;
    this.a2x_1 = $path;
    this.b2x_1 = $mode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CatalogVfs$open$slambda).d2x = function ($this$withContext, $completion) {
    var tmp = this.i2l($this$withContext, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(CatalogVfs$open$slambda).jd = function (p1, $completion) {
    return this.d2x((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CatalogVfs$open$slambda).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = protoOf(Proxy).a2t.call(this.z2w_1, this.a2x_1, this.b2x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return ARGUMENT.c2u_1;
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  protoOf(CatalogVfs$open$slambda).i2l = function ($this$withContext, completion) {
    var i = new CatalogVfs$open$slambda(this.z2w_1, this.a2x_1, this.b2x_1, completion);
    i.c2x_1 = $this$withContext;
    return i;
  };
  function CatalogVfs$open$slambda_0(this$0, $path, $mode, resultContinuation) {
    var i = new CatalogVfs$open$slambda(this$0, $path, $mode, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.d2x($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CatalogVfs$open$2($base, $fstat) {
    this.o2w_1 = $base;
    this.p2w_1 = $fstat;
    AsyncStreamBase.call(this);
  }
  protoOf(CatalogVfs$open$2).e2x = function (position, buffer, offset, len, $completion) {
    return this.o2w_1.e2x(position, buffer, offset, len, $completion);
  };
  protoOf(CatalogVfs$open$2).q2w = function ($completion) {
    var tmp = new $getLengthCOROUTINE$163(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(CatalogVfs$open$2).g2t = function ($completion) {
    return this.o2w_1.g2t($completion);
  };
  function $openCOROUTINE$156(_this__u8e3s4, path, mode, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o2x_1 = _this__u8e3s4;
    this.p2x_1 = path;
    this.q2x_1 = mode;
  }
  protoOf($openCOROUTINE$156).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.bc_1 = 1;
            suspendResult = this.o2x_1.y2x(this.p2x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r2x_1 = suspendResult;
            this.bc_1 = 2;
            var tmp_0 = new VfsCachedStatContext(this.r2x_1);
            suspendResult = withContext(tmp_0, CatalogVfs$open$slambda_0(this.o2x_1, this.p2x_1, this.q2x_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var base = suspendResult;
            return buffered(toAsyncStream(new CatalogVfs$open$2(base, this.r2x_1)));
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $statCOROUTINE$157(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h2y_1 = _this__u8e3s4;
    this.i2y_1 = path;
  }
  protoOf($statCOROUTINE$157).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.h2y_1.y2x(this.i2y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            return tmp0_elvis_lhs == null ? this.h2y_1.k2t(normalize(_PathInfo___init__impl__vpw96a(this.i2y_1)), VOID, true) : tmp0_elvis_lhs;
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $statOrNullCOROUTINE$158(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r2y_1 = _this__u8e3s4;
    this.s2y_1 = path;
  }
  protoOf($statOrNullCOROUTINE$158).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 5;
            this.t2y_1 = normalize(_PathInfo___init__impl__vpw96a(this.s2y_1));
            if (this.t2y_1 === '/' ? true : this.t2y_1 === '') {
              return this.r2y_1.i2t('/', true, new Long(0, 0), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, true);
            }

            this.u2y_1 = get_baseName_0(_PathInfo___init__impl__vpw96a(this.t2y_1));
            this.bc_1 = 1;
            suspendResult = this.r2y_1.b2z(_PathInfo___get_fullPath__impl__21fx6x(get_parent(_PathInfo___init__impl__vpw96a(this.t2y_1))), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v2y_1 = suspendResult;
            if (this.v2y_1 == null) {
              var tmp_0 = this;
              tmp_0.x2y_1 = this.r2y_1.w2x_1;
              var tmp_1 = this;
              tmp_1.y2y_1 = this.s2y_1;
              this.z2y_1 = this.x2y_1.d2(this.y2y_1);
              if (this.z2y_1 == null) {
                this.bc_1 = 2;
                suspendResult = this.r2y_1.u2x_1.e15(this.s2y_1).h2s(this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_2 = this;
                tmp_2.a2z_1 = this.z2y_1;
                this.bc_1 = 3;
                continue $sm;
              }
            } else {
              this.w2y_1 = this.v2y_1;
              this.bc_1 = 4;
              continue $sm;
            }

          case 2:
            var answer = suspendResult;
            this.x2y_1.x1(this.y2y_1, answer);
            this.a2z_1 = answer;
            this.bc_1 = 3;
            continue $sm;
          case 3:
            var tmp_3 = this;
            return this.a2z_1;
          case 4:
            var info = this.w2y_1;
            var tmp1_elvis_lhs = info.d2(this.u2y_1);
            return tmp1_elvis_lhs == null ? this.r2y_1.k2t(this.t2y_1, VOID, true) : tmp1_elvis_lhs;
          case 5:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 5) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $cachedListSimpleStatsOrNullCOROUTINE$161(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k2z_1 = _this__u8e3s4;
    this.l2z_1 = path;
  }
  protoOf($cachedListSimpleStatsOrNullCOROUTINE$161).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 5;
            this.m2z_1 = normalize(_PathInfo___init__impl__vpw96a(this.l2z_1));
            this.bc_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.o2z_1 = this.k2z_1.x2x_1;
            var tmp_1 = this;
            tmp_1.p2z_1 = this.m2z_1;
            var tmp_2 = this;
            var this_0 = this.o2z_1;
            var key = this.p2z_1;
            tmp_2.q2z_1 = this_0.get(key);
            if (!(this.q2z_1 == null)) {
              this.n2z_1 = this.q2z_1;
              this.bc_1 = 4;
              continue $sm;
            } else {
              this.bc_1 = 2;
              continue $sm;
            }

          case 2:
            this.bc_1 = 3;
            suspendResult = this.k2z_1.r2z(this.m2z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var out = suspendResult;
            var this_1 = this.o2z_1;
            var key_0 = this.p2z_1;
            this_1.set(key_0, out);
            this.n2z_1 = out;
            if (false) {
              this.bc_1 = 1;
              continue $sm;
            }

            this.bc_1 = 4;
            continue $sm;
          case 4:
            return this.n2z_1;
          case 5:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 5) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $listSimpleStatsOrNullCOROUTINE$162(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a30_1 = _this__u8e3s4;
    this.b30_1 = path;
  }
  protoOf($listSimpleStatsOrNullCOROUTINE$162).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.a30_1.u2x_1.e15(this.b30_1).e15('$catalog.json').b2w(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c30_1 = suspendResult;
            this.cc_1 = 3;
            this.bc_1 = 4;
            continue $sm;
          case 2:
            this.cc_1 = 3;
            var tmp_0 = this.ec_1;
            if (tmp_0 instanceof Error) {
              var e = this.ec_1;
              var tmp_1 = this;
              if (!(e instanceof FileNotFoundException)) {
                var this_0 = this.a30_1.v2x_1;
                var level = Level_ERROR_getInstance();
                if (this_0.w17(level)) {
                  this_0.x17(level, e);
                }
              }
              return null;
            } else {
              throw this.ec_1;
            }

          case 3:
            throw this.ec_1;
          case 4:
            this.cc_1 = 3;
            var catalogJsonString = this.c30_1;
            var data = get_dyn(Json_instance.d30(catalogJsonString));
            var tmp0_subject = _Dyn___get_value__impl__bemnlg(data);
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
              var this_1 = _Dyn___get_list__impl__qpwjp(data);
              var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
              var tmp0_iterator = this_1.s();
              while (tmp0_iterator.t()) {
                var item = tmp0_iterator.u().a2p_1;
                var localName = get_baseName_0(_PathInfo___init__impl__vpw96a(_Dyn___get_str__impl__dup4cs(Dyn__get_impl_6l2p80_0(item, 'name'))));
                destination.p(this.a30_1.i2t(this.b30_1 + '/' + localName, _Dyn___get_bool__impl__nv3iun(Dyn__get_impl_6l2p80_0(item, 'isDirectory')), _Dyn___get_long__impl__wdxl7n(Dyn__get_impl_6l2p80_0(item, 'size')), VOID, VOID, VOID, VOID, VOID, Companion_getInstance_3().zh(_Dyn___get_long__impl__wdxl7n(Dyn__get_impl_6l2p80_0(item, 'createTime'))), Companion_getInstance_3().zh(_Dyn___get_long__impl__wdxl7n(Dyn__get_impl_6l2p80_0(item, 'modifiedTime'))), VOID, VOID, VOID, true));
              }
              var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination, 10)), 16);
              var destination_0 = LinkedHashMap_init_$Create$_0(capacity);
              var tmp0_iterator_0 = destination.s();
              while (tmp0_iterator_0.t()) {
                var element = tmp0_iterator_0.u();
                destination_0.x1(get_baseName(element), element);
              }
              return destination_0;
            } else {
              var out = LinkedHashMap_init_$Create$();
              var tmp1_iterator = _Dyn___get_keys__impl__o4xmor(data).s();
              while (tmp1_iterator.t()) {
                var key = tmp1_iterator.u().a2p_1;
                var fileName = _Dyn___get_str__impl__dup4cs(key);
                var info = Dyn__get_impl_6l2p80(data, key);
                var tmp2_elvis_lhs = Dyn__toLongOrNull_impl_ws7y8j(Dyn__get_impl_6l2p80_0(info, 0));
                var size = tmp2_elvis_lhs == null ? new Long(0, 0) : tmp2_elvis_lhs;
                var tmp3_elvis_lhs = Dyn__toLongOrNull_impl_ws7y8j(Dyn__get_impl_6l2p80_0(info, 1));
                var creationTime = tmp3_elvis_lhs == null ? new Long(0, 0) : tmp3_elvis_lhs;
                var tmp4_elvis_lhs = Dyn__toLongOrNull_impl_ws7y8j(Dyn__get_impl_6l2p80_0(info, 2));
                var modifiedTime = tmp4_elvis_lhs == null ? creationTime : tmp4_elvis_lhs;
                var isDirectory = endsWith(fileName, '/');
                var baseName = trimEnd(fileName, charArrayOf([_Char___init__impl__6a9atx(47)]));
                var value = this.a30_1.i2t(this.b30_1 + '/' + baseName, isDirectory, size, VOID, VOID, VOID, VOID, VOID, Companion_getInstance_3().zh(creationTime), Companion_getInstance_3().zh(modifiedTime), VOID, VOID, VOID, true);
                out.x1(baseName, value);
              }
              return out;
            }

        }
      } catch ($p) {
        var e_0 = $p;
        if (this.cc_1 === 3) {
          throw e_0;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e_0;
        }
      }
     while (true);
  };
  function CatalogVfs(parent) {
    Proxy.call(this);
    this.u2x_1 = parent;
    this.v2x_1 = Companion_getInstance_2().i17('CatalogVfs');
    this.w2x_1 = LinkedHashMap_init_$Create$();
    this.x2x_1 = FastStringMap();
  }
  protoOf(CatalogVfs).a2t = function (path, mode, $completion) {
    var tmp = new $openCOROUTINE$156(this, path, mode, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(CatalogVfs).j2q = function (path, $completion) {
    return this.u2x_1.e15(path);
  };
  protoOf(CatalogVfs).c2t = function (path, $completion) {
    var tmp = new $statCOROUTINE$157(this, path, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(CatalogVfs).y2x = function (path, $completion) {
    var tmp = new $statOrNullCOROUTINE$158(this, path, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(CatalogVfs).b2z = function (path, $completion) {
    var tmp = new $cachedListSimpleStatsOrNullCOROUTINE$161(this, path, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(CatalogVfs).r2z = function (path, $completion) {
    var tmp = new $listSimpleStatsOrNullCOROUTINE$162(this, path, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  function Companion_12() {
  }
  protoOf(Companion_12).d2w = function (jailRoot) {
    return (new JailVfs(jailRoot, Unit_instance)).f2t();
  };
  var Companion_instance_18;
  function Companion_getInstance_19() {
    return Companion_instance_18;
  }
  function JailVfs(jailRoot, dummy) {
    Proxy.call(this);
    this.g30_1 = jailRoot;
    this.h30_1 = normalize(this.g30_1.h2p());
  }
  protoOf(JailVfs).j2q = function (path, $completion) {
    return this.g30_1.e15(trim_0(normalize(get_pathInfo(path)), charArrayOf([_Char___init__impl__6a9atx(47)])));
  };
  protoOf(JailVfs).d2t = function () {
    return this.g30_1.d2t();
  };
  protoOf(JailVfs).toString = function () {
    return 'JailVfs(' + this.g30_1 + ')';
  };
  var resourcesVfsDebug;
  function Companion_13() {
  }
  var Companion_instance_19;
  function Companion_getInstance_20() {
    return Companion_instance_19;
  }
  function LocalVfs() {
    Vfs.call(this);
  }
  protoOf(LocalVfs).toString = function () {
    return 'LocalVfs';
  };
  function StandardVfs() {
  }
  protoOf(StandardVfs).i30 = function () {
    throw new NotImplementedError();
  };
  function get_localCurrentDirVfs() {
    return get_applicationVfs();
  }
  function get_resourcesVfs() {
    return get_standardVfs().i30();
  }
  function unmountInternal($this, folder) {
    removeAll($this.m30_1, MountableVfs$unmountInternal$lambda(folder));
  }
  function resort($this) {
    // Inline function 'kotlin.collections.sortByDescending' call
    var this_0 = $this.m30_1;
    if (this_0.l() > 1) {
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp = MountableVfs$resort$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
      sortWith(this_0, tmp$ret$0);
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.n30_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).g9 = function (a, b) {
    return this.n30_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.g9(a, b);
  };
  function MountableVfs$unmountInternal$lambda($folder) {
    return function (it) {
      return it.pe_1 === normalize(get_pathInfo($folder));
    };
  }
  function MountableVfs$resort$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'korlibs.io.file.std.MountableVfs.resort.<anonymous>' call
    var tmp = b.pe_1.length;
    // Inline function 'korlibs.io.file.std.MountableVfs.resort.<anonymous>' call
    var tmp$ret$1 = a.pe_1.length;
    return compareValues(tmp, tmp$ret$1);
  }
  function $closeCOROUTINE$181(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w30_1 = _this__u8e3s4;
  }
  protoOf($closeCOROUTINE$181).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 5;
            if (this.w30_1.l30_1) {
              var tmp_0 = this;
              tmp_0.x30_1 = this.w30_1.m30_1;
              this.y30_1 = 0;
              this.bc_1 = 1;
              continue $sm;
            } else {
              this.bc_1 = 4;
              continue $sm;
            }

          case 1:
            if (!(this.y30_1 < this.x30_1.l())) {
              this.bc_1 = 3;
              continue $sm;
            }

            var tmp_1 = this;
            var tmp0 = this.y30_1;
            this.y30_1 = tmp0 + 1 | 0;
            tmp_1.z30_1 = this.x30_1.b1(tmp0);
            this.bc_1 = 2;
            suspendResult = this.z30_1.qe_1.r2d_1.g2t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.bc_1 = 1;
            continue $sm;
          case 3:
            this.bc_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 5) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function MountableVfs(closeMounts) {
    Proxy.call(this);
    this.l30_1 = closeMounts;
    this.m30_1 = ArrayList_init_$Create$();
  }
  protoOf(MountableVfs).g2t = function ($completion) {
    var tmp = new $closeCOROUTINE$181(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(MountableVfs).a31 = function (folder, file) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.file.std.MountableVfs.mount.<anonymous>' call
    unmountInternal(this, folder);
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.m30_1;
    var element = to(normalize(get_pathInfo(folder)), file);
    this_0.p(element);
    resort(this);
    return this;
  };
  protoOf(MountableVfs).j2q = function (path, $completion) {
    var rpath = normalize(get_pathInfo(path));
    // Inline function 'korlibs.datastructure.iterators.fastForEach' call
    var this_0 = this.m30_1;
    var n = 0;
    while (n < this_0.l()) {
      // Inline function 'korlibs.io.file.std.MountableVfs.access.<anonymous>' call
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      var name_for_destructuring_parameter_0_fjsvno = this_0.b1(tmp0);
      var base = name_for_destructuring_parameter_0_fjsvno.re();
      var file = name_for_destructuring_parameter_0_fjsvno.se();
      if (startsWith(rpath, base)) {
        // Inline function 'kotlin.text.substring' call
        var startIndex = base.length;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = rpath.substring(startIndex);
        return file.e15(tmp$ret$1);
      }
    }
    throw new FileNotFoundException(path);
  };
  protoOf(MountableVfs).toString = function () {
    return 'MountableVfs';
  };
  function StandardPathsBase() {
  }
  function UrlVfs(url, client, failFromStatus) {
    client = client === VOID ? createHttpClient() : client;
    failFromStatus = failFromStatus === VOID ? true : failFromStatus;
    return (new UrlVfs_0(url.n31(VOID, VOID, VOID, VOID, '', null).o31(), Unit_instance, client, failFromStatus)).e15(url.g31_1);
  }
  function $readCOROUTINE$189(_this__u8e3s4, position, buffer, offset, len, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x31_1 = _this__u8e3s4;
    this.y31_1 = position;
    this.z31_1 = buffer;
    this.a32_1 = offset;
    this.b32_1 = len;
  }
  protoOf($readCOROUTINE$189).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 6;
            if (this.b32_1 === 0)
              return 0;
            this.bc_1 = 1;
            var this_0 = this.y31_1;
            var other = this.b32_1;
            suspendResult = _readRangeBase(this.x31_1.h32_1, this.x31_1.i32_1, until_0(this.y31_1, this_0.pb(toLong(other))), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c32_1 = suspendResult;
            this.d32_1 = this.c32_1.o32_1;
            this.e32_1 = this.a32_1;
            this.f32_1 = this.b32_1;
            this.g32_1 = 0;
            this.bc_1 = 2;
            continue $sm;
          case 2:
            if (!(this.f32_1 > 0)) {
              this.bc_1 = 5;
              continue $sm;
            }

            this.bc_1 = 3;
            suspendResult = this.d32_1.r32(this.z31_1, this.e32_1, this.f32_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var read = suspendResult;
            if (read < 0 ? this.g32_1 === 0 : false)
              return read;
            if (read <= 0) {
              this.bc_1 = 5;
              continue $sm;
            } else {
              this.bc_1 = 4;
              continue $sm;
            }

          case 4:
            this.f32_1 = this.f32_1 - read | 0;
            this.g32_1 = this.g32_1 + read | 0;
            this.e32_1 = this.e32_1 + read | 0;
            this.bc_1 = 2;
            continue $sm;
          case 5:
            return this.g32_1;
          case 6:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 6) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $getLengthCOROUTINE$190(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a33_1 = _this__u8e3s4;
  }
  protoOf($getLengthCOROUTINE$190).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.bc_1 = 1;
            suspendResult = this.a33_1.f2x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              this.b33_1 = this.a33_1.j32_1.l2s_1;
              this.bc_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              unsupported_0();
            }

            break;
          case 2:
            return this.b33_1;
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function _readRangeBase($this, fullUrl, range, $completion) {
    var tmp = new $_readRangeBaseCOROUTINE$185($this, fullUrl, range, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function UrlVfs$open$2(this$0, $fullUrl, $stat) {
    this.h32_1 = this$0;
    this.i32_1 = $fullUrl;
    this.j32_1 = $stat;
    AsyncStreamBase.call(this);
  }
  protoOf(UrlVfs$open$2).e2x = function (position, buffer, offset, len, $completion) {
    var tmp = new $readCOROUTINE$189(this, position, buffer, offset, len, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(UrlVfs$open$2).f2x = function ($completion) {
    return this.j32_1.l2s_1.g6(new Long(0, 0)) >= 0;
  };
  protoOf(UrlVfs$open$2).q2w = function ($completion) {
    var tmp = new $getLengthCOROUTINE$190(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  function $openCOROUTINE$183(_this__u8e3s4, path, mode, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x33_1 = _this__u8e3s4;
    this.y33_1 = path;
    this.z33_1 = mode;
  }
  protoOf($openCOROUTINE$183).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 6;
            this.cc_1 = 5;
            this.a34_1 = this.x33_1.i34(this.y33_1);
            if (startsWith(this.a34_1, 'file:')) {
              this.bc_1 = 4;
              suspendResult = this.x33_1.f34_1.k34(this.a34_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 1;
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            var tmp0_safe_receiver = this.b6().ic(Companion_instance_17);
            tmp_0.b34_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2u_1;
            if (this.b34_1 == null) {
              this.bc_1 = 2;
              suspendResult = this.x33_1.c2t(this.y33_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.c34_1 = this.b34_1;
              this.bc_1 = 3;
              continue $sm;
            }

          case 2:
            this.c34_1 = suspendResult;
            this.bc_1 = 3;
            continue $sm;
          case 3:
            var stat = this.c34_1;
            var tmp_1 = stat.u2s_1;
            var response = tmp_1 instanceof Response ? tmp_1 : null;
            if (!stat.j2s_1) {
              throw new FileNotFoundException('Unexistant ' + this.a34_1 + ' : ' + response);
            }

            return buffered(toAsyncStream(new UrlVfs$open$2(this.x33_1, this.a34_1, stat)));
          case 4:
            var ARGUMENT = suspendResult;
            return openAsync(ARGUMENT);
          case 5:
            this.cc_1 = 6;
            var tmp_2 = this.ec_1;
            if (tmp_2 instanceof RuntimeException) {
              var e = this.ec_1;
              var tmp2_elvis_lhs = e.message;
              throw new FileNotFoundException(tmp2_elvis_lhs == null ? 'error' : tmp2_elvis_lhs);
            } else {
              throw this.ec_1;
            }

          case 6:
            throw this.ec_1;
          case 7:
            this.cc_1 = 6;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.cc_1 === 6) {
          throw e_0;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e_0;
        }
      }
     while (true);
  };
  function $_readRangeBaseCOROUTINE$185(_this__u8e3s4, fullUrl, range, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k33_1 = _this__u8e3s4;
    this.l33_1 = fullUrl;
    this.m33_1 = range;
  }
  protoOf($_readRangeBaseCOROUTINE$185).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            this.bc_1 = 1;
            suspendResult = this.k33_1.f34_1.w34(Companion_getInstance_24().m34_1, this.l33_1, Headers_init_$Create$_0(this.m33_1.equals(get_LONG_ZERO_TO_MAX_RANGE()) ? LinkedHashMap_init_$Create$() : linkedHashMapOf([to('range', 'bytes=' + this.m33_1.n8().toString() + '-' + this.m33_1.o8().toString())])), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n33_1 = suspendResult;
            var tmp_0 = this;
            tmp_0.o33_1 = this.n33_1;
            if (this.k33_1.g34_1) {
              if (this.o33_1.k32_1 === 404)
                throw new FileNotFoundException(this.l33_1 + ' not found');
              this.bc_1 = 2;
              suspendResult = this.o33_1.x34(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 3;
              continue $sm;
            }

          case 2:
            this.bc_1 = 3;
            continue $sm;
          case 3:
            return this.n33_1;
          case 4:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 4) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readRangeCOROUTINE$186(_this__u8e3s4, path, range, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g35_1 = _this__u8e3s4;
    this.h35_1 = path;
    this.i35_1 = range;
  }
  protoOf($readRangeCOROUTINE$186).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.bc_1 = 1;
            suspendResult = _readRangeBase(this.g35_1, this.g35_1.i34(this.h35_1), this.i35_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j35_1 = suspendResult;
            this.k35_1 = this.j35_1.o32_1;
            this.bc_1 = 2;
            suspendResult = readAll(this.k35_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $statCOROUTINE$188(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t35_1 = _this__u8e3s4;
    this.u35_1 = path;
  }
  protoOf($statCOROUTINE$188).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 6;
            this.v35_1 = this.t35_1.i34(this.u35_1);
            if (startsWith(this.v35_1, 'file:')) {
              this.cc_1 = 3;
              this.bc_1 = 2;
              suspendResult = this.t35_1.f34_1.k34(this.v35_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 1;
              suspendResult = this.t35_1.f34_1.w34(Companion_getInstance_24().n34_1, this.v35_1, VOID, VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var result = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (result.p32_1) {
              var tmp0_safe_receiver = result.m32_1.e15(Companion_instance_25.y35_1);
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toLongOrNull_0(tmp0_safe_receiver);
              tmp_1 = this.t35_1.i2t(this.u35_1, false, tmp1_elvis_lhs == null ? new Long(-1, -1) : tmp1_elvis_lhs, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, result);
            } else {
              tmp_1 = this.t35_1.k2t(this.u35_1, result);
            }

            tmp_0.w35_1 = tmp_1;
            this.bc_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = ARGUMENT.length;
            var size = toLong(ARGUMENT_0);
            this.x35_1 = this.t35_1.i2t(this.u35_1, false, size, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, null);
            this.cc_1 = 6;
            this.bc_1 = 4;
            continue $sm;
          case 3:
            this.cc_1 = 6;
            var tmp_2 = this.ec_1;
            if (tmp_2 instanceof Error) {
              var e = this.ec_1;
              var tmp_3 = this;
              printStackTrace(e);
              tmp_3.x35_1 = this.t35_1.k2t(this.u35_1);
              this.bc_1 = 4;
              continue $sm;
            } else {
              throw this.ec_1;
            }

          case 4:
            this.cc_1 = 6;
            this.w35_1 = this.x35_1;
            this.bc_1 = 5;
            continue $sm;
          case 5:
            return this.w35_1;
          case 6:
            throw this.ec_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.cc_1 === 6) {
          throw e_0;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e_0;
        }
      }
     while (true);
  };
  function UrlVfs_0(url, dummy, client, failFromStatus) {
    client = client === VOID ? createHttpClient() : client;
    failFromStatus = failFromStatus === VOID ? true : failFromStatus;
    Vfs.call(this);
    this.d34_1 = url;
    this.e34_1 = dummy;
    this.f34_1 = client;
    this.g34_1 = failFromStatus;
    this.h34_1 = this.d34_1;
  }
  protoOf(UrlVfs_0).d2t = function () {
    return this.h34_1;
  };
  protoOf(UrlVfs_0).i34 = function (path) {
    var result = trim_0(this.d34_1, charArrayOf([_Char___init__impl__6a9atx(47)])) + toString_0(_Char___init__impl__6a9atx(47)) + trim_0(path, charArrayOf([_Char___init__impl__6a9atx(47)]));
    return result;
  };
  protoOf(UrlVfs_0).a2t = function (path, mode, $completion) {
    var tmp = new $openCOROUTINE$183(this, path, mode, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(UrlVfs_0).b2t = function (path, range, $completion) {
    var tmp = new $readRangeCOROUTINE$186(this, path, range, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(UrlVfs_0).c2t = function (path, $completion) {
    var tmp = new $statCOROUTINE$188(this, path, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(UrlVfs_0).toString = function () {
    return 'UrlVfs';
  };
  function UrlVfs_1(url, client, failFromStatus) {
    client = client === VOID ? createHttpClient() : client;
    failFromStatus = failFromStatus === VOID ? true : failFromStatus;
    return UrlVfs(Companion_getInstance_23().i17(url), client, failFromStatus);
  }
  var CHARSET_PROVIDERS;
  var CHARSET_PROVIDERS_LOCK;
  var LATIN1;
  var UTF16_LE;
  var UTF16_BE;
  function Companion_14() {
  }
  protoOf(Companion_14).d36 = function (_this__u8e3s4, codePoint) {
    if ((55296 <= codePoint ? codePoint <= 57343 : false) ? true : codePoint > 65535) {
      var U0 = codePoint - 65536 | 0;
      var hs = extract(U0, 10, 10);
      var ls = extract(U0, 0, 10);
      _this__u8e3s4.g5(numberToChar(55296 | hs));
      _this__u8e3s4.g5(numberToChar(56320 | ls));
    } else {
      _this__u8e3s4.g5(numberToChar(codePoint));
    }
  };
  var Companion_instance_20;
  function Companion_getInstance_21() {
    return Companion_instance_20;
  }
  function Charset(name) {
    this.e36_1 = name;
  }
  protoOf(Charset).f36 = function (nbytes) {
    return imul(nbytes, 2);
  };
  function UTF16Charset(le) {
    Charset.call(this, 'UTF-16-' + (le ? 'LE' : 'BE'));
    this.i36_1 = le;
  }
  protoOf(UTF16Charset).f36 = function (nbytes) {
    return imul(nbytes, 2);
  };
  protoOf(UTF16Charset).g36 = function (out, src, start, end) {
    var consumed = 0;
    var progression = step(until(start, end), 2);
    var inductionVariable = progression.la_1;
    var last = progression.ma_1;
    var step_0 = progression.na_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var char = numberToChar(getS16(src, n, this.i36_1));
        out.g5(char);
        consumed = consumed + 2 | 0;
      }
       while (!(n === last));
    return consumed;
  };
  function toString_3(_this__u8e3s4, charset, start, end) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    _init_properties_Charset_kt__c47y1m();
    var out = StringBuilder_init_$Create$_0(charset.f36(end - start | 0));
    charset.g36(out, _this__u8e3s4, start, end);
    return out.toString();
  }
  function ASCII() {
    ASCII_instance = this;
    var tmp = 0;
    var tmp_0 = charArray(128);
    while (tmp < 128) {
      var tmp_1 = tmp;
      tmp_0[tmp_1] = numberToChar(tmp_1);
      tmp = tmp + 1 | 0;
    }
    SingleByteCharset.call(this, 'ASCII', concatToString(tmp_0) + '\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xF8\xA3\xD8\xD7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\xAE\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\xC1\xC2\xC0\xA9\u2563\u2551\u2557\u255D\xA2\xA5\u2510\u2514\u2534\u252C\u251C\u2500\u253C\xE3\xC3\u255A\u2554\u2569\u2566\u2560\u2550\u256C\xA4\xF0\xD0\xCA\xCB\xC8\u0131\xCD\xCE\xCF\u2518\u250C\u2588\u2584\xA6\xCC\u2580\xD3\xDF\xD4\xD2\xF5\xD5\xB5\xFE\xDE\xDA\xDB\xD9\xFD\xDD\xAF\xB4\xAD\xB1\u2017\xBE\xB6\xA7\xF7\xB8\xB0\xA8\xB7\xB9\xB3\xB2\u25A0\xA0');
  }
  var ASCII_instance;
  function ASCII_getInstance() {
    if (ASCII_instance == null)
      new ASCII();
    return ASCII_instance;
  }
  function ISO_8859_1() {
    ISO_8859_1_instance = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.lang.ISO_8859_1.<init>.<anonymous>' call
    var inductionVariable = 0;
    if (inductionVariable < 256)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.g5(numberToChar(n));
      }
       while (inductionVariable < 256);
    var tmp$ret$1 = this_0.toString();
    SingleByteCharset.call(this, 'ISO-8859-1', tmp$ret$1);
  }
  var ISO_8859_1_instance;
  function ISO_8859_1_getInstance() {
    if (ISO_8859_1_instance == null)
      new ISO_8859_1();
    return ISO_8859_1_instance;
  }
  function SingleByteCharset(name, conv) {
    BaseSingleByteCharset.call(this, name);
    this.k36_1 = conv;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = IntIntMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.lang.SingleByteCharset.v.<anonymous>' call
    var inductionVariable = 0;
    var last = this.k36_1.length;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_1 = charSequenceGet(this.k36_1, n);
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_1);
        this_0.n11(tmp$ret$0, n);
      }
       while (inductionVariable < last);
    tmp.l36_1 = this_0;
  }
  protoOf(SingleByteCharset).g36 = function (out, src, start, end) {
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        out.g5(charSequenceGet(this.k36_1, src[n] & 255));
      }
       while (inductionVariable < end);
    return end - start | 0;
  };
  function BaseSingleByteCharset(name) {
    Charset.call(this, name);
  }
  protoOf(BaseSingleByteCharset).f36 = function (nbytes) {
    return nbytes;
  };
  function UTC8CharsetBase(name) {
    Charset.call(this, name);
  }
  protoOf(UTC8CharsetBase).f36 = function (nbytes) {
    return imul(nbytes, 2);
  };
  protoOf(UTC8CharsetBase).g36 = function (out, src, start, end) {
    if ((start < 0 ? true : start > src.length) ? true : end < 0 ? true : end > src.length) {
      // Inline function 'kotlin.error' call
      var message = 'Out of bounds';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var i = start;
    loop: while (i < end) {
      var c = src[i] & 255;
      var tmp0_subject = c >> 4;
      if (0 <= tmp0_subject ? tmp0_subject <= 7 : false) {
        Companion_instance_20.d36(out, c);
        i = i + 1 | 0;
      } else if (12 <= tmp0_subject ? tmp0_subject <= 13 : false) {
        if ((i + 1 | 0) >= end)
          break loop;
        Companion_instance_20.d36(out, (c & 31) << 6 | src[i + 1 | 0] & 63);
        i = i + 2 | 0;
      } else if (tmp0_subject === 14) {
        if ((i + 2 | 0) >= end)
          break loop;
        Companion_instance_20.d36(out, (c & 15) << 12 | (src[i + 1 | 0] & 63) << 6 | src[i + 2 | 0] & 63);
        i = i + 3 | 0;
      } else if (tmp0_subject === 15) {
        if ((i + 3 | 0) >= end)
          break loop;
        Companion_instance_20.d36(out, insert(insert(insert(insert(0, extract(src[i + 0 | 0], 0, 3), 18, 3), extract(src[i + 1 | 0], 0, 6), 12, 6), extract(src[i + 2 | 0], 0, 6), 6, 6), extract(src[i + 3 | 0], 0, 6), 0, 6));
        i = i + 4 | 0;
      } else {
        out.g5(_Char___init__impl__6a9atx(65533));
        i = i + 1 | 0;
      }
    }
    return i - start | 0;
  };
  var properties_initialized_Charset_kt_dajgec;
  function _init_properties_Charset_kt__c47y1m() {
    if (!properties_initialized_Charset_kt_dajgec) {
      properties_initialized_Charset_kt_dajgec = true;
      // Inline function 'kotlin.collections.arrayListOf' call
      CHARSET_PROVIDERS = ArrayList_init_$Create$();
      CHARSET_PROVIDERS_LOCK = new NonRecursiveLock();
      LATIN1 = ISO_8859_1_getInstance();
      UTF16_LE = new UTF16Charset(true);
      UTF16_BE = new UTF16Charset(false);
    }
  }
  function cancel_0(_this__u8e3s4) {
    return _this__u8e3s4.o36(CancellationException_init_$Create$(''));
  }
  function CloseableCancellable() {
  }
  function CancellableGroup() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.p36_1 = ArrayList_init_$Create$();
  }
  protoOf(CancellableGroup).q36 = function (c) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.p36_1;
    var element = cancellable(c);
    this_0.p(element);
  };
  protoOf(CancellableGroup).r13 = function () {
    this.o36(CancellationException_init_$Create$_0());
  };
  protoOf(CancellableGroup).o36 = function (e) {
    cancel_1(this.p36_1, e);
  };
  function toDisposable(_this__u8e3s4) {
    var tmp = toDisposable$lambda(_this__u8e3s4);
    return new sam$korlibs_io_lang_Disposable$0(tmp);
  }
  function cancellable(_this__u8e3s4) {
    var tmp = cancellable$lambda(_this__u8e3s4);
    return new sam$korlibs_io_lang_Cancellable$0(tmp);
  }
  function cancel_1(_this__u8e3s4, e) {
    e = e === VOID ? CancellationException_init_$Create$('') : e;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_iterator = _this__u8e3s4.s();
    while (tmp0_iterator.t()) {
      var c = tmp0_iterator.u();
      c.o36(e);
    }
    return Unit_instance;
  }
  function sam$korlibs_io_lang_Disposable$0(function_0) {
    this.r36_1 = function_0;
  }
  protoOf(sam$korlibs_io_lang_Disposable$0).pm = function () {
    return this.r36_1();
  };
  function sam$korlibs_io_lang_Cancellable$0(function_0) {
    this.s36_1 = function_0;
  }
  protoOf(sam$korlibs_io_lang_Cancellable$0).o36 = function (e) {
    return this.s36_1(e);
  };
  function toDisposable$lambda($this_toDisposable) {
    return function () {
      $this_toDisposable.r13();
      return Unit_instance;
    };
  }
  function cancellable$lambda($this_cancellable) {
    return function (it) {
      $this_cancellable.r13();
      return Unit_instance;
    };
  }
  var customEnvironments;
  function Companion_15() {
  }
  protoOf(Companion_15).e15 = function (key) {
    var tmp0_safe_receiver = customEnvironments;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e15(key);
    return tmp1_elvis_lhs == null ? EnvironmentInternal_instance.e15(key) : tmp1_elvis_lhs;
  };
  var Companion_instance_21;
  function Companion_getInstance_22() {
    return Companion_instance_21;
  }
  function unsupported_0(msg) {
    msg = msg === VOID ? 'unsupported' : msg;
    throw UnsupportedOperationException_init_$Create$(msg);
  }
  function invalidOp(msg) {
    throw new InvalidOperationException(msg);
  }
  function get_invalidOp() {
    throw new InvalidOperationException();
  }
  function InvalidOperationException(str) {
    str = str === VOID ? 'Invalid Operation' : str;
    Exception_init_$Init$(str, this);
    captureStack(this, InvalidOperationException);
  }
  function MalformedInputException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, MalformedInputException);
  }
  function currentStackTrace(msg) {
    msg = msg === VOID ? 'printStackTrace' : msg;
    return stackTraceToString(Exception_init_$Create$(msg));
  }
  function FileAlreadyExistsException(msg) {
    IOException.call(this, msg);
    captureStack(this, FileAlreadyExistsException);
  }
  function get_unreachable() {
    throw new UnreachableException();
  }
  function UnreachableException(str) {
    str = str === VOID ? 'Unreachable' : str;
    Exception_init_$Init$(str, this);
    captureStack(this, UnreachableException);
  }
  var replaceNonPrintableCharactersRegex$delegate;
  function substr(_this__u8e3s4, start) {
    _init_properties_StringExt_kt__eg42u6();
    return substr_0(_this__u8e3s4, start, _this__u8e3s4.length);
  }
  function substr_0(_this__u8e3s4, start, length) {
    _init_properties_StringExt_kt__eg42u6();
    var low = clamp(start >= 0 ? start : _this__u8e3s4.length + start | 0, 0, _this__u8e3s4.length);
    var high = clamp(length >= 0 ? low + length | 0 : _this__u8e3s4.length + length | 0, 0, _this__u8e3s4.length);
    var tmp;
    if (high >= low) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.substring(low, high);
    } else {
      tmp = '';
    }
    return tmp;
  }
  function substringEquals(_this__u8e3s4, a, aIndex, b, bIndex, count) {
    _init_properties_StringExt_kt__eg42u6();
    if (count === 0)
      return true;
    if (aIndex < 0 ? true : bIndex < 0)
      return false;
    if ((aIndex + count | 0) > a.length)
      return false;
    if ((bIndex + count | 0) > b.length)
      return false;
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(a, aIndex + n | 0) === charSequenceGet(b, bIndex + n | 0)))
          return false;
      }
       while (inductionVariable < count);
    return true;
  }
  function String_fromCharArray(arrays, offset, size) {
    offset = offset === VOID ? 0 : offset;
    size = size === VOID ? arrays.length - offset | 0 : size;
    _init_properties_StringExt_kt__eg42u6();
    return concatToString_0(arrays, offset, offset + size | 0);
  }
  function lastIndexOfOrNull(_this__u8e3s4, char, startIndex) {
    startIndex = startIndex === VOID ? get_lastIndex_0(_this__u8e3s4) : startIndex;
    _init_properties_StringExt_kt__eg42u6();
    // Inline function 'kotlin.takeIf' call
    var this_0 = lastIndexOf(_this__u8e3s4, char, startIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'korlibs.io.lang.lastIndexOfOrNull.<anonymous>' call
    if (this_0 >= 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function replaceNonPrintableCharactersRegex$delegate$lambda() {
    _init_properties_StringExt_kt__eg42u6();
    return Regex_init_$Create$('[^ -~]');
  }
  var properties_initialized_StringExt_kt_sd962o;
  function _init_properties_StringExt_kt__eg42u6() {
    if (!properties_initialized_StringExt_kt_sd962o) {
      properties_initialized_StringExt_kt_sd962o = true;
      replaceNonPrintableCharactersRegex$delegate = lazy(replaceNonPrintableCharactersRegex$delegate$lambda);
    }
  }
  function QueryString() {
  }
  protoOf(QueryString).w36 = function (str) {
    // Inline function 'kotlin.collections.linkedMapOf' call
    var out = LinkedHashMap_init_$Create$();
    // Inline function 'korlibs.datastructure.iterators.fastForEach' call
    var this_0 = split_0(str, charArrayOf([_Char___init__impl__6a9atx(38)]));
    var n = 0;
    while (n < this_0.l()) {
      // Inline function 'korlibs.io.net.QueryString.decode.<anonymous>' call
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      var chunk = this_0.b1(tmp0);
      var parts = split_0(chunk, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
      var key = Companion_getInstance_23().x36(parts.b1(0), get_UTF8(), true);
      var tmp = Companion_getInstance_23();
      // Inline function 'kotlin.collections.getOrElse' call
      var tmp_0;
      if (1 >= 0 ? 1 <= get_lastIndex(parts) : false) {
        tmp_0 = parts.b1(1);
      } else {
        // Inline function 'korlibs.io.net.QueryString.decode.<anonymous>.<anonymous>' call
        tmp_0 = key;
      }
      var tmp$ret$2 = tmp_0;
      var value = tmp.x36(tmp$ret$2, get_UTF8(), true);
      // Inline function 'kotlin.collections.getOrPut' call
      var value_0 = out.d2(key);
      var tmp_1;
      if (value_0 == null) {
        // Inline function 'korlibs.io.net.QueryString.decode.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.arrayListOf' call
        var answer = ArrayList_init_$Create$();
        out.x1(key, answer);
        tmp_1 = answer;
      } else {
        tmp_1 = value_0;
      }
      var list = tmp_1;
      // Inline function 'kotlin.collections.plusAssign' call
      list.p(value);
    }
    return out;
  };
  var QueryString_instance;
  function QueryString_getInstance() {
    return QueryString_instance;
  }
  function Companion_16() {
    Companion_instance_22 = this;
    this.b36_1 = 0;
    this.c36_1 = Regex_init_$Create$('\\w+:');
  }
  protoOf(Companion_16).y36 = function (scheme) {
    switch (scheme) {
      case 'ftp':
        return 21;
      case 'ftps':
        return 990;
      case 'http':
      case 'ws':
        return 80;
      case 'https':
      case 'wss':
        return 443;
      default:
        return -1;
    }
  };
  protoOf(Companion_16).z36 = function (scheme, userInfo, host, path, query, fragment, opaque, port) {
    var tmp;
    if (scheme == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = scheme.toLowerCase();
    }
    return new URL_0(opaque, tmp, userInfo, host, path, query, fragment, port);
  };
  protoOf(Companion_16).a37 = function (scheme, userInfo, host, path, query, fragment, opaque, port, $super) {
    opaque = opaque === VOID ? false : opaque;
    port = port === VOID ? this.b36_1 : port;
    return $super === VOID ? this.z36(scheme, userInfo, host, path, query, fragment, opaque, port) : $super.z36.call(this, scheme, userInfo, host, path, query, fragment, opaque, port);
  };
  protoOf(Companion_16).i17 = function (url) {
    var r = new StrReader(url);
    var schemeColon = r.g37(this.c36_1);
    var tmp;
    if (!(schemeColon == null)) {
      var isHierarchical = !(r.h37('//') == null);
      var nonScheme = r.i37();
      var scheme = dropLast(schemeColon, 1);
      var nonFragment = substringBefore(nonScheme, _Char___init__impl__6a9atx(35));
      var fragment = substringAfterOrNull(nonScheme, _Char___init__impl__6a9atx(35));
      var nonQuery = substringBefore(nonFragment, _Char___init__impl__6a9atx(63));
      var query = substringAfterOrNull(nonFragment, _Char___init__impl__6a9atx(63));
      var authority = substringBefore(nonQuery, _Char___init__impl__6a9atx(47));
      var path = substringAfterOrNull(nonQuery, _Char___init__impl__6a9atx(47));
      var hostWithPort = substringAfter(authority, _Char___init__impl__6a9atx(64));
      var userInfo = substringBeforeOrNull(authority, _Char___init__impl__6a9atx(64));
      var host = substringBefore(hostWithPort, _Char___init__impl__6a9atx(58));
      var port = substringAfterOrNull(hostWithPort, _Char___init__impl__6a9atx(58));
      var tmp2_$this = Companion_getInstance_23();
      var tmp3_opaque = !isHierarchical;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'korlibs.io.net.Companion.invoke.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(host) > 0) {
        tmp_0 = host;
      } else {
        tmp_0 = null;
      }
      var tmp4_host = tmp_0;
      var tmp5_path = !(path == null) ? '/' + path : '';
      var tmp1_elvis_lhs = port == null ? null : toIntOrNull(port);
      var tmp6_port = tmp1_elvis_lhs == null ? this.b36_1 : tmp1_elvis_lhs;
      tmp = tmp2_$this.z36(scheme, userInfo, tmp4_host, tmp5_path, query, fragment, tmp3_opaque, tmp6_port);
    } else {
      var nonFragment_0 = substringBefore(url, _Char___init__impl__6a9atx(35));
      var fragment_0 = substringAfterOrNull(url, _Char___init__impl__6a9atx(35));
      var path_0 = substringBefore(nonFragment_0, _Char___init__impl__6a9atx(63));
      var query_0 = substringAfterOrNull(nonFragment_0, _Char___init__impl__6a9atx(63));
      tmp = Companion_getInstance_23().a37(null, null, null, path_0, query_0, fragment_0, false);
    }
    return tmp;
  };
  protoOf(Companion_16).j37 = function (url) {
    return !((new StrReader(url)).g37(this.c36_1) == null);
  };
  protoOf(Companion_16).k37 = function (base, access) {
    var refinedAccess = (startsWith(access, '//') ? contains_0(base, ':') : false) ? substringBefore_0(base, ':') + ':' + access : access;
    if (this.j37(refinedAccess))
      return refinedAccess;
    if (isBlank(base)) {
      throw new MalformedInputException('The base URL should not be empty, or the access URL must be absolute.');
    }
    if (!this.j37(base)) {
      throw new MalformedInputException('At least one of the base URL or access URL must be absolute.');
    }
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(refinedAccess) === 0) {
      tmp = base;
    } else {
      if (startsWith(refinedAccess, '/')) {
        tmp = Companion_getInstance_23().i17(base).n31(VOID, VOID, VOID, VOID, normalizeUrl(refinedAccess), null).o31();
      } else {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'korlibs.io.net.Companion.resolve.<anonymous>' call
        var $this$run = Companion_getInstance_23().i17(base);
        var tmp_0;
        if (startsWith(refinedAccess, '?') ? true : startsWith(refinedAccess, '#')) {
          tmp_0 = $this$run.g31_1 + refinedAccess;
        } else {
          tmp_0 = substringBeforeLast($this$run.g31_1, _Char___init__impl__6a9atx(47)) + '/' + refinedAccess;
        }
        var refinedPath = tmp_0;
        tmp = $this$run.n31(VOID, VOID, VOID, VOID, '/' + trimStart(normalizeUrl(refinedPath), charArrayOf([_Char___init__impl__6a9atx(47)])), null).o31();
      }
    }
    return tmp;
  };
  protoOf(Companion_16).x36 = function (s, charset, formUrlEncoded) {
    var bos = ByteArrayBuilder_init_$Create$();
    var len = s.length;
    var n = 0;
    while (n < len) {
      var c = charSequenceGet(s, n);
      if (c === _Char___init__impl__6a9atx(37)) {
        // Inline function 'korlibs.memory.ByteArrayBuilder.append' call
        var v = toByte(toInt(substr_0(s, n + 1 | 0, 2), 16));
        bos.m1w(v);
        n = n + 2 | 0;
      } else if (c === _Char___init__impl__6a9atx(43))
        if (formUrlEncoded) {
          // Inline function 'korlibs.memory.ByteArrayBuilder.append' call
          bos.m1w(32);
        } else {
          // Inline function 'korlibs.memory.ByteArrayBuilder.append' call
          bos.m1w(43);
        }
       else {
        // Inline function 'korlibs.memory.ByteArrayBuilder.append' call
        var v_0 = Char__toByte_impl_7s7yt0(c);
        bos.m1w(v_0);
      }
      n = n + 1 | 0;
    }
    return toString_3(bos.n1w(), charset);
  };
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_16();
    return Companion_instance_22;
  }
  function URL$fullUrl$delegate$lambda(this$0) {
    return function () {
      return this$0.l37().toString();
    };
  }
  function URL$fullUrlWithoutScheme$delegate$lambda(this$0) {
    return function () {
      return this$0.l37(false).toString();
    };
  }
  function URL$pathWithQuery$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (!(this$0.h31_1 == null)) {
        tmp = this$0.g31_1 + '?' + this$0.h31_1;
      } else {
        tmp = this$0.g31_1;
      }
      return tmp;
    };
  }
  function URL_0(isOpaque, scheme, userInfo, host, path, query, fragment, defaultPort) {
    Companion_getInstance_23();
    this.c31_1 = isOpaque;
    this.d31_1 = scheme;
    this.e31_1 = userInfo;
    this.f31_1 = host;
    this.g31_1 = path;
    this.h31_1 = query;
    this.i31_1 = fragment;
    this.j31_1 = defaultPort;
    var tmp = this;
    tmp.k31_1 = lazy(URL$fullUrl$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.l31_1 = lazy(URL$fullUrlWithoutScheme$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.m31_1 = lazy(URL$pathWithQuery$delegate$lambda(this));
  }
  protoOf(URL_0).m37 = function () {
    return Companion_getInstance_23().y36(this.d31_1);
  };
  protoOf(URL_0).n37 = function () {
    return this.j31_1 === Companion_getInstance_23().b36_1 ? this.m37() : this.j31_1;
  };
  protoOf(URL_0).o31 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.k31_1;
    fullUrl$factory();
    return this_0.p3();
  };
  protoOf(URL_0).o37 = function (includeScheme, out) {
    if (includeScheme ? !(this.d31_1 == null) : false) {
      out.f5('' + this.d31_1 + ':');
      if (!this.c31_1) {
        out.f5('//');
      }
    }
    if (!(this.e31_1 == null)) {
      out.f5('' + this.e31_1 + '@');
    }
    if (!(this.f31_1 == null)) {
      out.f5(this.f31_1);
    }
    if (!(this.n37() === Companion_getInstance_23().b36_1) ? !(this.n37() === this.m37()) : false) {
      out.g5(_Char___init__impl__6a9atx(58)).q7(this.n37());
    }
    out.f5(this.g31_1);
    if (!(this.h31_1 == null)) {
      out.f5('?' + this.h31_1);
    }
    if (!(this.i31_1 == null)) {
      out.f5('#' + this.i31_1);
    }
    return out;
  };
  protoOf(URL_0).l37 = function (includeScheme, out, $super) {
    includeScheme = includeScheme === VOID ? true : includeScheme;
    out = out === VOID ? StringBuilder_init_$Create$() : out;
    return $super === VOID ? this.o37(includeScheme, out) : $super.o37.call(this, includeScheme, out);
  };
  protoOf(URL_0).toString = function () {
    return this.o31();
  };
  protoOf(URL_0).p37 = function (isOpaque, scheme, userInfo, host, path, query, fragment, defaultPort) {
    return new URL_0(isOpaque, scheme, userInfo, host, path, query, fragment, defaultPort);
  };
  protoOf(URL_0).n31 = function (isOpaque, scheme, userInfo, host, path, query, fragment, defaultPort, $super) {
    isOpaque = isOpaque === VOID ? this.c31_1 : isOpaque;
    scheme = scheme === VOID ? this.d31_1 : scheme;
    userInfo = userInfo === VOID ? this.e31_1 : userInfo;
    host = host === VOID ? this.f31_1 : host;
    path = path === VOID ? this.g31_1 : path;
    query = query === VOID ? this.h31_1 : query;
    fragment = fragment === VOID ? this.i31_1 : fragment;
    defaultPort = defaultPort === VOID ? this.j31_1 : defaultPort;
    return $super === VOID ? this.p37(isOpaque, scheme, userInfo, host, path, query, fragment, defaultPort) : $super.p37.call(this, isOpaque, scheme, userInfo, host, path, query, fragment, defaultPort);
  };
  protoOf(URL_0).hashCode = function () {
    var result = getBooleanHashCode(this.c31_1);
    result = imul(result, 31) + (this.d31_1 == null ? 0 : getStringHashCode(this.d31_1)) | 0;
    result = imul(result, 31) + (this.e31_1 == null ? 0 : getStringHashCode(this.e31_1)) | 0;
    result = imul(result, 31) + (this.f31_1 == null ? 0 : getStringHashCode(this.f31_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.g31_1) | 0;
    result = imul(result, 31) + (this.h31_1 == null ? 0 : getStringHashCode(this.h31_1)) | 0;
    result = imul(result, 31) + (this.i31_1 == null ? 0 : getStringHashCode(this.i31_1)) | 0;
    result = imul(result, 31) + this.j31_1 | 0;
    return result;
  };
  protoOf(URL_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URL_0))
      return false;
    var tmp0_other_with_cast = other instanceof URL_0 ? other : THROW_CCE();
    if (!(this.c31_1 === tmp0_other_with_cast.c31_1))
      return false;
    if (!(this.d31_1 == tmp0_other_with_cast.d31_1))
      return false;
    if (!(this.e31_1 == tmp0_other_with_cast.e31_1))
      return false;
    if (!(this.f31_1 == tmp0_other_with_cast.f31_1))
      return false;
    if (!(this.g31_1 === tmp0_other_with_cast.g31_1))
      return false;
    if (!(this.h31_1 == tmp0_other_with_cast.h31_1))
      return false;
    if (!(this.i31_1 == tmp0_other_with_cast.i31_1))
      return false;
    if (!(this.j31_1 === tmp0_other_with_cast.j31_1))
      return false;
    return true;
  };
  function normalizeUrl(_this__u8e3s4) {
    // Inline function 'kotlin.text.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.firstOrNull' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(_this__u8e3s4)) {
        var element = charSequenceGet(_this__u8e3s4, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'korlibs.io.net.normalizeUrl.<anonymous>' call
        if (element === _Char___init__impl__6a9atx(63) ? true : element === _Char___init__impl__6a9atx(35)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
      tmp = _Char___init__impl__6a9atx(63);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var paramFlag = tmp;
    var pathParts = toMutableList(split_0(_this__u8e3s4, charArrayOf([paramFlag])));
    pathParts.m(0, normalize(get_pathInfo(pathParts.b1(0)), false));
    return joinToString(pathParts, toString_0(paramFlag));
  }
  function fullUrl$factory() {
    return getPropertyCallableRef('fullUrl', 1, KProperty1, function (receiver) {
      return receiver.o31();
    }, null);
  }
  var Methods_ALL_instance;
  var Methods_OPTIONS_instance;
  var Methods_GET_instance;
  var Methods_HEAD_instance;
  var Methods_POST_instance;
  var Methods_PUT_instance;
  var Methods_DELETE_instance;
  var Methods_TRACE_instance;
  var Methods_CONNECT_instance;
  var Methods_PATCH_instance;
  var Methods_entriesInitialized;
  function Methods_initEntries() {
    if (Methods_entriesInitialized)
      return Unit_instance;
    Methods_entriesInitialized = true;
    Methods_ALL_instance = new Methods('ALL', 0);
    Methods_OPTIONS_instance = new Methods('OPTIONS', 1);
    Methods_GET_instance = new Methods('GET', 2);
    Methods_HEAD_instance = new Methods('HEAD', 3);
    Methods_POST_instance = new Methods('POST', 4);
    Methods_PUT_instance = new Methods('PUT', 5);
    Methods_DELETE_instance = new Methods('DELETE', 6);
    Methods_TRACE_instance = new Methods('TRACE', 7);
    Methods_CONNECT_instance = new Methods('CONNECT', 8);
    Methods_PATCH_instance = new Methods('PATCH', 9);
  }
  function Companion_17() {
    Companion_instance_23 = this;
    this.l34_1 = Methods_OPTIONS_getInstance();
    this.m34_1 = Methods_GET_getInstance();
    this.n34_1 = Methods_HEAD_getInstance();
    this.o34_1 = Methods_POST_getInstance();
    this.p34_1 = Methods_PUT_getInstance();
    this.q34_1 = Methods_DELETE_getInstance();
    this.r34_1 = Methods_TRACE_getInstance();
    this.s34_1 = Methods_CONNECT_getInstance();
    this.t34_1 = Methods_PATCH_getInstance();
    this.u34_1 = listOf([this.l34_1, this.m34_1, this.n34_1, this.o34_1, this.p34_1, this.q34_1, this.r34_1, this.s34_1, this.t34_1]);
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.u34_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      // Inline function 'korlibs.io.net.http.Companion.valuesMap.<anonymous>' call
      var tmp$ret$0 = to(item.p9_1, item);
      destination.p(tmp$ret$0);
    }
    tmp.v34_1 = toMap_0(destination);
  }
  var Companion_instance_23;
  function Companion_getInstance_24() {
    if (Companion_instance_23 == null)
      new Companion_17();
    return Companion_instance_23;
  }
  function Companion_18() {
  }
  var Companion_instance_24;
  function Companion_getInstance_25() {
    return Companion_instance_24;
  }
  function Headers_init_$Init$(items, $this) {
    Headers.call($this, toList_0(items));
    return $this;
  }
  function Headers_init_$Create$(items) {
    return Headers_init_$Init$(items, objectCreate(protoOf(Headers)));
  }
  function Headers_init_$Init$_0(map, $this) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(map.l());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = map.e2().s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      // Inline function 'korlibs.io.net.http.Headers.<init>.<anonymous>' call
      var tmp$ret$1 = to(item.l3(), item.p3());
      destination.p(tmp$ret$1);
    }
    Headers.call($this, destination);
    return $this;
  }
  function Headers_init_$Create$_0(map) {
    return Headers_init_$Init$_0(map, objectCreate(protoOf(Headers)));
  }
  function Headers_init_$Init$_1(str, $this) {
    Headers.call($this, Companion_instance_25.q37(str).a36_1);
    return $this;
  }
  function Headers_init_$Create$_1(str) {
    return Headers_init_$Init$_1(str, objectCreate(protoOf(Headers)));
  }
  function Companion_19() {
    this.y35_1 = 'Content-Length';
    this.z35_1 = 'Content-Type';
  }
  protoOf(Companion_19).q37 = function (str) {
    if (str == null)
      return Headers_init_$Create$([]);
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(str, ['\n']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      // Inline function 'korlibs.io.net.http.Companion.parse.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$0 = toString(trim(isCharSequence(item) ? item : THROW_CCE()));
      var parts = split_0(tmp$ret$0, charArrayOf([_Char___init__impl__6a9atx(58)]), VOID, 2);
      var tmp;
      if (parts.l() >= 2) {
        // Inline function 'kotlin.text.trim' call
        var this_1 = parts.b1(0);
        var tmp_0 = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
        // Inline function 'kotlin.text.trim' call
        var this_2 = parts.b1(1);
        var tmp$ret$2 = toString(trim(isCharSequence(this_2) ? this_2 : THROW_CCE()));
        tmp = to(tmp_0, tmp$ret$2);
      } else {
        tmp = null;
      }
      var tmp$ret$3 = tmp;
      destination.p(tmp$ret$3);
    }
    return new Headers(filterNotNull(destination));
  };
  var Companion_instance_25;
  function Companion_getInstance_26() {
    return Companion_instance_25;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.r37_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).g9 = function (a, b) {
    return this.r37_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.g9(a, b);
  };
  function Http$Headers$toListGrouped$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'korlibs.io.net.http.Headers.toListGrouped.<anonymous>' call
    // Inline function 'kotlin.text.toLowerCase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = a.pe_1.toLowerCase();
    // Inline function 'korlibs.io.net.http.Headers.toListGrouped.<anonymous>' call
    // Inline function 'kotlin.text.toLowerCase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = b.pe_1.toLowerCase();
    return compareValues(tmp, tmp$ret$5);
  }
  function Methods(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HttpException(statusCode, msg, statusText, headers) {
    msg = msg === VOID ? 'Error' + statusCode : msg;
    var tmp;
    if (statusText === VOID) {
      var tmp0_elvis_lhs = HttpStatusMessage_getInstance().s37_1.d2(statusCode);
      tmp = tmp0_elvis_lhs == null ? 'Error' + statusCode : tmp0_elvis_lhs;
    } else {
      tmp = statusText;
    }
    statusText = tmp;
    headers = headers === VOID ? Headers_init_$Create$([]) : headers;
    IOException.call(this, '' + statusCode + ' ' + statusText + ' - ' + msg);
    captureStack(this, HttpException);
    this.t37_1 = statusCode;
    this.u37_1 = msg;
    this.v37_1 = statusText;
    this.w37_1 = headers;
  }
  function Headers(items) {
    this.a36_1 = items;
  }
  protoOf(Headers).s = function () {
    return this.a36_1.s();
  };
  protoOf(Headers).e15 = function (key) {
    return this.x37(key);
  };
  protoOf(Headers).x37 = function (key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.a36_1.s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'korlibs.io.net.http.Headers.getFirst.<anonymous>' call
        if (equals_0(element.pe_1, key, true)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qe_1;
  };
  protoOf(Headers).y37 = function () {
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var this_0 = this.a36_1;
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      // Inline function 'korlibs.io.net.http.Headers.toListGrouped.<anonymous>' call
      // Inline function 'kotlin.text.toLowerCase' call
      // Inline function 'kotlin.js.asDynamic' call
      var key = element.pe_1.toLowerCase();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.d2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$();
        destination.x1(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.p(element);
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(destination.l());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = destination.e2().s();
    while (tmp0_iterator_0.t()) {
      var item = tmp0_iterator_0.u();
      // Inline function 'korlibs.io.net.http.Headers.toListGrouped.<anonymous>' call
      var tmp_0 = first(item.p3()).pe_1;
      // Inline function 'kotlin.collections.map' call
      var this_1 = item.p3();
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_1 = this_1.s();
      while (tmp0_iterator_1.t()) {
        var item_0 = tmp0_iterator_1.u();
        // Inline function 'korlibs.io.net.http.Headers.toListGrouped.<anonymous>.<anonymous>' call
        var tmp$ret$8 = item_0.qe_1;
        destination_1.p(tmp$ret$8);
      }
      var tmp$ret$11 = to(tmp_0, destination_1);
      destination_0.p(tmp$ret$11);
    }
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_1 = Http$Headers$toListGrouped$lambda;
    var tmp$ret$14 = new sam$kotlin_Comparator$0_0(tmp_1);
    return sortedWith(destination_0, tmp$ret$14);
  };
  protoOf(Headers).z37 = function (newHeaders) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(newHeaders, 10));
    var tmp0_iterator = newHeaders.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      // Inline function 'korlibs.io.net.http.Headers.withReplaceHeaders.<anonymous>' call
      // Inline function 'kotlin.text.toLowerCase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = item.pe_1.toLowerCase();
      destination.p(tmp$ret$2);
    }
    var replaceKeys = toSet(destination);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = this.a36_1;
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = this_0.s();
    while (tmp0_iterator_0.t()) {
      var element = tmp0_iterator_0.u();
      // Inline function 'korlibs.io.net.http.Headers.withReplaceHeaders.<anonymous>' call
      // Inline function 'kotlin.text.toLowerCase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$6 = element.pe_1.toLowerCase();
      if (!replaceKeys.v(tmp$ret$6)) {
        destination_0.p(element);
      }
    }
    return new Headers(plus_1(destination_0, toList(newHeaders)));
  };
  protoOf(Headers).a38 = function (newHeaders) {
    return this.z37(toList_0(newHeaders));
  };
  protoOf(Headers).b38 = function (newHeaders) {
    return this.z37(toList(newHeaders));
  };
  protoOf(Headers).toString = function () {
    return 'Headers(' + joinToString(this.y37(), ', ') + ')';
  };
  protoOf(Headers).hashCode = function () {
    return hashCode(this.a36_1);
  };
  protoOf(Headers).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Headers))
      return false;
    var tmp0_other_with_cast = other instanceof Headers ? other : THROW_CCE();
    if (!equals(this.a36_1, tmp0_other_with_cast.a36_1))
      return false;
    return true;
  };
  function Methods_OPTIONS_getInstance() {
    Methods_initEntries();
    return Methods_OPTIONS_instance;
  }
  function Methods_GET_getInstance() {
    Methods_initEntries();
    return Methods_GET_instance;
  }
  function Methods_HEAD_getInstance() {
    Methods_initEntries();
    return Methods_HEAD_instance;
  }
  function Methods_POST_getInstance() {
    Methods_initEntries();
    return Methods_POST_instance;
  }
  function Methods_PUT_getInstance() {
    Methods_initEntries();
    return Methods_PUT_instance;
  }
  function Methods_DELETE_getInstance() {
    Methods_initEntries();
    return Methods_DELETE_instance;
  }
  function Methods_TRACE_getInstance() {
    Methods_initEntries();
    return Methods_TRACE_instance;
  }
  function Methods_CONNECT_getInstance() {
    Methods_initEntries();
    return Methods_CONNECT_instance;
  }
  function Methods_PATCH_getInstance() {
    Methods_initEntries();
    return Methods_PATCH_instance;
  }
  function get__defaultHttpFactory() {
    _init_properties_HttpClient_kt__huy6s3();
    // Inline function 'kotlin.getValue' call
    var this_0 = _defaultHttpFactory$delegate;
    _defaultHttpFactory$factory();
    return this_0.p3();
  }
  var _defaultHttpFactory$delegate;
  function Companion_20() {
  }
  var Companion_instance_26;
  function Companion_getInstance_27() {
    return Companion_instance_26;
  }
  function HttpClient$Response$responseCharset$delegate$lambda() {
    return get_UTF8();
  }
  function $readAllBytesCOROUTINE$194(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k38_1 = _this__u8e3s4;
  }
  protoOf($readAllBytesCOROUTINE$194).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = readAll(this.k38_1.o32_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var allContent = suspendResult;
            return allContent;
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readAllStringCOROUTINE$195(_this__u8e3s4, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t38_1 = _this__u8e3s4;
    this.u38_1 = charset;
  }
  protoOf($readAllStringCOROUTINE$195).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.t38_1.v38(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bytes = suspendResult;
            return toString_3(bytes, this.u38_1);
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $checkErrorsCOROUTINE$196(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e39_1 = _this__u8e3s4;
  }
  protoOf($checkErrorsCOROUTINE$196).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            var tmp_0 = this;
            tmp_0.f39_1 = this.e39_1;
            var tmp_1 = this;
            tmp_1.g39_1 = this.f39_1;
            if (!this.g39_1.p32_1) {
              this.h39_1 = this.g39_1.k32_1;
              this.bc_1 = 2;
              suspendResult = this.g39_1.i39(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 1;
              continue $sm;
            }

          case 1:
            return this.f39_1;
          case 2:
            var ARGUMENT = suspendResult;
            throw new HttpException(this.h39_1, ARGUMENT, this.g39_1.l32_1);
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function Companion_21() {
    Companion_instance_27 = this;
    this.j39_1 = new RequestConfig();
  }
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_21();
    return Companion_instance_27;
  }
  function Response(status, statusText, headers, rawContent, content) {
    this.k32_1 = status;
    this.l32_1 = statusText;
    this.m32_1 = headers;
    this.n32_1 = rawContent;
    this.o32_1 = content;
    this.p32_1 = this.k32_1 < 400;
    var tmp = this;
    tmp.q32_1 = lazy(HttpClient$Response$responseCharset$delegate$lambda);
  }
  protoOf(Response).v38 = function ($completion) {
    var tmp = new $readAllBytesCOROUTINE$194(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(Response).k39 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.q32_1;
    responseCharset$factory();
    return this_0.p3();
  };
  protoOf(Response).l39 = function (charset, $completion) {
    var tmp = new $readAllStringCOROUTINE$195(this, charset, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(Response).i39 = function (charset, $completion, $super) {
    charset = charset === VOID ? this.k39() : charset;
    return $super === VOID ? this.l39(charset, $completion) : $super.l39.call(this, charset, $completion);
  };
  protoOf(Response).x34 = function ($completion) {
    var tmp = new $checkErrorsCOROUTINE$196(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(Response).m39 = function (content) {
    return new CompletedResponse(this.k32_1, this.l32_1, this.m32_1, content);
  };
  protoOf(Response).toString = function () {
    return 'Response(status=' + this.k32_1 + ', statusText=' + this.l32_1 + ', headers=' + this.m32_1 + ', rawContent=' + this.n32_1 + ', content=' + this.o32_1 + ')';
  };
  protoOf(Response).hashCode = function () {
    var result = this.k32_1;
    result = imul(result, 31) + getStringHashCode(this.l32_1) | 0;
    result = imul(result, 31) + this.m32_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.n32_1) | 0;
    result = imul(result, 31) + hashCode(this.o32_1) | 0;
    return result;
  };
  protoOf(Response).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Response))
      return false;
    var tmp0_other_with_cast = other instanceof Response ? other : THROW_CCE();
    if (!(this.k32_1 === tmp0_other_with_cast.k32_1))
      return false;
    if (!(this.l32_1 === tmp0_other_with_cast.l32_1))
      return false;
    if (!this.m32_1.equals(tmp0_other_with_cast.m32_1))
      return false;
    if (!equals(this.n32_1, tmp0_other_with_cast.n32_1))
      return false;
    if (!equals(this.o32_1, tmp0_other_with_cast.o32_1))
      return false;
    return true;
  };
  function CompletedResponse(status, statusText, headers, content) {
    this.n39_1 = status;
    this.o39_1 = statusText;
    this.p39_1 = headers;
    this.q39_1 = content;
    this.r39_1 = this.n39_1 < 400;
  }
  protoOf(CompletedResponse).toString = function () {
    return 'CompletedResponse(status=' + this.n39_1 + ', statusText=' + this.o39_1 + ', headers=' + this.p39_1 + ', content=' + this.q39_1 + ')';
  };
  protoOf(CompletedResponse).hashCode = function () {
    var result = this.n39_1;
    result = imul(result, 31) + getStringHashCode(this.o39_1) | 0;
    result = imul(result, 31) + this.p39_1.hashCode() | 0;
    result = imul(result, 31) + (this.q39_1 == null ? 0 : hashCode(this.q39_1)) | 0;
    return result;
  };
  protoOf(CompletedResponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedResponse))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedResponse ? other : THROW_CCE();
    if (!(this.n39_1 === tmp0_other_with_cast.n39_1))
      return false;
    if (!(this.o39_1 === tmp0_other_with_cast.o39_1))
      return false;
    if (!this.p39_1.equals(tmp0_other_with_cast.p39_1))
      return false;
    if (!equals(this.q39_1, tmp0_other_with_cast.q39_1))
      return false;
    return true;
  };
  function RequestConfig(followRedirects, throwErrors, maxRedirects, referer, simulateBrowser) {
    Companion_getInstance_28();
    followRedirects = followRedirects === VOID ? true : followRedirects;
    throwErrors = throwErrors === VOID ? false : throwErrors;
    maxRedirects = maxRedirects === VOID ? 10 : maxRedirects;
    referer = referer === VOID ? null : referer;
    simulateBrowser = simulateBrowser === VOID ? false : simulateBrowser;
    this.s39_1 = followRedirects;
    this.t39_1 = throwErrors;
    this.u39_1 = maxRedirects;
    this.v39_1 = referer;
    this.w39_1 = simulateBrowser;
  }
  protoOf(RequestConfig).x39 = function (followRedirects, throwErrors, maxRedirects, referer, simulateBrowser) {
    return new RequestConfig(followRedirects, throwErrors, maxRedirects, referer, simulateBrowser);
  };
  protoOf(RequestConfig).y39 = function (followRedirects, throwErrors, maxRedirects, referer, simulateBrowser, $super) {
    followRedirects = followRedirects === VOID ? this.s39_1 : followRedirects;
    throwErrors = throwErrors === VOID ? this.t39_1 : throwErrors;
    maxRedirects = maxRedirects === VOID ? this.u39_1 : maxRedirects;
    referer = referer === VOID ? this.v39_1 : referer;
    simulateBrowser = simulateBrowser === VOID ? this.w39_1 : simulateBrowser;
    return $super === VOID ? this.x39(followRedirects, throwErrors, maxRedirects, referer, simulateBrowser) : $super.x39.call(this, followRedirects, throwErrors, maxRedirects, referer, simulateBrowser);
  };
  protoOf(RequestConfig).toString = function () {
    return 'RequestConfig(followRedirects=' + this.s39_1 + ', throwErrors=' + this.t39_1 + ', maxRedirects=' + this.u39_1 + ', referer=' + this.v39_1 + ', simulateBrowser=' + this.w39_1 + ')';
  };
  protoOf(RequestConfig).hashCode = function () {
    var result = getBooleanHashCode(this.s39_1);
    result = imul(result, 31) + getBooleanHashCode(this.t39_1) | 0;
    result = imul(result, 31) + this.u39_1 | 0;
    result = imul(result, 31) + (this.v39_1 == null ? 0 : getStringHashCode(this.v39_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.w39_1) | 0;
    return result;
  };
  protoOf(RequestConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RequestConfig))
      return false;
    var tmp0_other_with_cast = other instanceof RequestConfig ? other : THROW_CCE();
    if (!(this.s39_1 === tmp0_other_with_cast.s39_1))
      return false;
    if (!(this.t39_1 === tmp0_other_with_cast.t39_1))
      return false;
    if (!(this.u39_1 === tmp0_other_with_cast.u39_1))
      return false;
    if (!(this.v39_1 == tmp0_other_with_cast.v39_1))
      return false;
    if (!(this.w39_1 === tmp0_other_with_cast.w39_1))
      return false;
    return true;
  };
  function mergeUrls($this, base, append) {
    return Companion_getInstance_23().k37(base, append);
  }
  function Companion_22() {
    this.z39_1 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36';
    this.a3a_1 = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8';
    this.b3a_1 = 'en-us';
    this.c3a_1 = 'gzip, deflate';
    this.d3a_1 = 'Close';
  }
  protoOf(Companion_22).e3a = function (headers, host) {
    var out = Headers_init_$Create$([to('User-Agent', this.z39_1), to('Accept', this.a3a_1), to('Accept-Language', this.b3a_1), to('Accept-Encoding', this.c3a_1), to('Connection', this.d3a_1)]).b38(headers);
    return !(host == null) ? out.a38([to('Host', host)]) : out;
  };
  var Companion_instance_28;
  function Companion_getInstance_29() {
    return Companion_instance_28;
  }
  function $requestCOROUTINE$199(_this__u8e3s4, method, url, headers, content, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n3a_1 = _this__u8e3s4;
    this.o3a_1 = method;
    this.p3a_1 = url;
    this.q3a_1 = headers;
    this.r3a_1 = content;
    this.s3a_1 = config;
  }
  protoOf($requestCOROUTINE$199).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 9;
            this.t3a_1 = this.r3a_1;
            if (this.t3a_1 == null) {
              this.u3a_1 = null;
              this.bc_1 = 2;
              continue $sm;
            } else {
              this.bc_1 = 1;
              suspendResult = this.t3a_1.q2w(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.u3a_1 = suspendResult;
            this.bc_1 = 2;
            continue $sm;
          case 2:
            this.v3a_1 = this.u3a_1;
            this.w3a_1 = this.v3a_1 == null ? new Long(0, 0) : this.v3a_1;
            this.x3a_1 = this.q3a_1;
            var tmp_0;
            if (!(this.r3a_1 == null)) {
              var tmp$ret$0;
              l$ret$1: do {
                var this_0 = this.q3a_1;
                var tmp_1;
                if (isInterface(this_0, Collection)) {
                  tmp_1 = this_0.x();
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
                var tmp0_iterator = this_0.s();
                while (tmp0_iterator.t()) {
                  var element = tmp0_iterator.u();
                  if (equals_0(element.pe_1, Companion_instance_25.y35_1, true)) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = false;
              }
               while (false);
              tmp_0 = !tmp$ret$0;
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              this.x3a_1 = this.x3a_1.a38([to(Companion_instance_25.y35_1, this.w3a_1.toString())]);
            }

            if (this.s3a_1.w39_1) {
              this.x3a_1 = Companion_instance_28.e3a(this.x3a_1, null);
            }

            this.bc_1 = 3;
            suspendResult = this.n3a_1.c3b(this.o3a_1, this.p3a_1, this.x3a_1, this.r3a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.y3a_1 = suspendResult;
            var tmp_2 = this;
            tmp_2.z3a_1 = this.y3a_1;
            if (this.s3a_1.t39_1) {
              this.bc_1 = 4;
              suspendResult = this.z3a_1.x34(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 5;
              continue $sm;
            }

          case 4:
            this.bc_1 = 5;
            continue $sm;
          case 5:
            this.a3b_1 = this.y3a_1;
            if (this.s3a_1.s39_1 ? this.s3a_1.u39_1 >= 0 : false) {
              this.b3b_1 = this.a3b_1.m32_1.e15('location');
              if (!(this.b3b_1 == null)) {
                this.bc_1 = 8;
                suspendResult = this.n3a_1.d3b(this.o3a_1, mergeUrls(this.n3a_1, this.p3a_1, this.b3b_1), this.q3a_1.a38([to('Referer', this.p3a_1)]), this.r3a_1, this.s3a_1.y39(VOID, VOID, this.s3a_1.u39_1 - 1 | 0), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.bc_1 = 6;
                continue $sm;
              }
            } else {
              this.bc_1 = 7;
              continue $sm;
            }

          case 6:
            this.bc_1 = 7;
            continue $sm;
          case 7:
            return this.a3b_1;
          case 8:
            return suspendResult;
          case 9:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 9) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $requestAsBytesCOROUTINE$201(_this__u8e3s4, method, url, headers, content, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m3b_1 = _this__u8e3s4;
    this.n3b_1 = method;
    this.o3b_1 = url;
    this.p3b_1 = headers;
    this.q3b_1 = content;
    this.r3b_1 = config;
  }
  protoOf($requestAsBytesCOROUTINE$201).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.bc_1 = 1;
            suspendResult = this.m3b_1.d3b(this.n3b_1, this.o3b_1, this.p3b_1, this.q3b_1, this.r3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s3b_1 = suspendResult;
            this.bc_1 = 2;
            suspendResult = this.s3b_1.v38(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return this.s3b_1.m39(ARGUMENT);
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readBytesCOROUTINE$202(_this__u8e3s4, url, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b3c_1 = _this__u8e3s4;
    this.c3c_1 = url;
    this.d3c_1 = config;
  }
  protoOf($readBytesCOROUTINE$202).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.b3c_1.e3c(Companion_getInstance_24().m34_1, this.c3c_1, VOID, VOID, this.d3c_1.y39(VOID, true), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return ARGUMENT.q39_1;
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function HttpClient() {
    this.j34_1 = false;
  }
  protoOf(HttpClient).d3b = function (method, url, headers, content, config, $completion) {
    var tmp = new $requestCOROUTINE$199(this, method, url, headers, content, config, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(HttpClient).w34 = function (method, url, headers, content, config, $completion, $super) {
    headers = headers === VOID ? Headers_init_$Create$([]) : headers;
    content = content === VOID ? null : content;
    config = config === VOID ? Companion_getInstance_28().j39_1 : config;
    return $super === VOID ? this.d3b(method, url, headers, content, config, $completion) : $super.d3b.call(this, method, url, headers, content, config, $completion);
  };
  protoOf(HttpClient).f3c = function (method, url, headers, content, config, $completion) {
    var tmp = new $requestAsBytesCOROUTINE$201(this, method, url, headers, content, config, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(HttpClient).e3c = function (method, url, headers, content, config, $completion, $super) {
    headers = headers === VOID ? Headers_init_$Create$([]) : headers;
    content = content === VOID ? null : content;
    config = config === VOID ? new RequestConfig() : config;
    return $super === VOID ? this.f3c(method, url, headers, content, config, $completion) : $super.f3c.call(this, method, url, headers, content, config, $completion);
  };
  protoOf(HttpClient).g3c = function (url, config, $completion) {
    var tmp = new $readBytesCOROUTINE$202(this, url, config, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(HttpClient).k34 = function (url, config, $completion, $super) {
    config = config === VOID ? new RequestConfig() : config;
    return $super === VOID ? this.g3c(url, config, $completion) : $super.g3c.call(this, url, config, $completion);
  };
  function createHttpClient() {
    _init_properties_HttpClient_kt__huy6s3();
    return get_defaultHttpFactory().h3c();
  }
  function HttpStatusMessage() {
    HttpStatusMessage_instance = this;
    this.s37_1 = linkedMapOf([to(100, 'Continue'), to(101, 'Switching Protocols'), to(200, 'OK'), to(201, 'Created'), to(202, 'Accepted'), to(203, 'Non-Authoritative Information'), to(204, 'No Content'), to(205, 'Reset Content'), to(206, 'Partial Content'), to(300, 'Multiple Choices'), to(301, 'Moved Permanently'), to(302, 'Found'), to(303, 'See Other'), to(304, 'Not Modified'), to(305, 'Use Proxy'), to(307, 'Temporary Redirect'), to(400, 'Bad Request'), to(401, 'Unauthorized'), to(402, 'Payment Required'), to(403, 'Forbidden'), to(404, 'Not Found'), to(405, 'Method Not Allowed'), to(406, 'Not Acceptable'), to(407, 'Proxy Authentication Required'), to(408, 'Request Timeout'), to(409, 'Conflict'), to(410, 'Gone'), to(411, 'Length Required'), to(412, 'Precondition Failed'), to(413, 'Request Entity Too Large'), to(414, 'Request-URI Too Long'), to(415, 'Unsupported Media Type'), to(416, 'Requested Range Not Satisfiable'), to(417, 'Expectation Failed'), to(418, "I'm a teapot"), to(422, 'Unprocessable Entity (WebDAV - RFC 4918)'), to(423, 'Locked (WebDAV - RFC 4918)'), to(424, 'Failed Dependency (WebDAV) (RFC 4918)'), to(425, 'Unassigned'), to(426, 'Upgrade Required (RFC 7231)'), to(428, 'Precondition Required'), to(429, 'Too Many Requests'), to(431, 'Request Header Fileds Too Large)'), to(449, 'Error449'), to(451, 'Unavailable for Legal Reasons'), to(500, 'Internal Server Error'), to(501, 'Not Implemented'), to(502, 'Bad Gateway'), to(503, 'Service Unavailable'), to(504, 'Gateway Timeout'), to(505, 'HTTP Version Not Supported'), to(506, 'Variant Also Negotiates (RFC 2295)'), to(507, 'Insufficient Storage (WebDAV - RFC 4918)'), to(508, 'Loop Detected (WebDAV)'), to(509, 'Bandwidth Limit Exceeded'), to(510, 'Not Extended (RFC 2774)'), to(511, 'Network Authentication Required')]);
  }
  var HttpStatusMessage_instance;
  function HttpStatusMessage_getInstance() {
    if (HttpStatusMessage_instance == null)
      new HttpStatusMessage();
    return HttpStatusMessage_instance;
  }
  function ProxiedHttpFactory(parent) {
    this.i3c_1 = parent;
    this.j3c_1 = parent;
  }
  protoOf(ProxiedHttpFactory).h3c = function () {
    return this.j3c_1.h3c();
  };
  function get_defaultHttpFactory() {
    _init_properties_HttpClient_kt__huy6s3();
    return get__defaultHttpFactory();
  }
  function _defaultHttpFactory$delegate$lambda() {
    _init_properties_HttpClient_kt__huy6s3();
    return new ProxiedHttpFactory(get_httpFactory());
  }
  function _defaultHttpFactory$factory() {
    return getPropertyCallableRef('_defaultHttpFactory', 0, KProperty0, function () {
      return get__defaultHttpFactory();
    }, null);
  }
  function responseCharset$factory() {
    return getPropertyCallableRef('responseCharset', 1, KProperty1, function (receiver) {
      return receiver.k39();
    }, null);
  }
  var properties_initialized_HttpClient_kt_t7kzvv;
  function _init_properties_HttpClient_kt__huy6s3() {
    if (!properties_initialized_HttpClient_kt_t7kzvv) {
      properties_initialized_HttpClient_kt_t7kzvv = true;
      _defaultHttpFactory$delegate = lazy(_defaultHttpFactory$delegate$lambda);
    }
  }
  function Fixed(value) {
    this.k3c_1 = value;
  }
  protoOf(Fixed).r2b = function () {
    return this.k3c_1;
  };
  protoOf(Fixed).toString = function () {
    return 'Fixed(value=' + this.k3c_1 + ')';
  };
  protoOf(Fixed).hashCode = function () {
    return hashCode(this.k3c_1);
  };
  protoOf(Fixed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fixed))
      return false;
    var tmp0_other_with_cast = other instanceof Fixed ? other : THROW_CCE();
    if (!equals(this.k3c_1, tmp0_other_with_cast.k3c_1))
      return false;
    return true;
  };
  function Resourceable(value) {
    return new Fixed(value);
  }
  function Resources(coroutineContext, root, parent) {
    root = root === VOID ? get_resourcesVfs() : root;
    parent = parent === VOID ? null : parent;
    this.l3c_1 = coroutineContext;
    this.m3c_1 = root;
    this.n3c_1 = parent;
    this.o3c_1 = LinkedHashMap_init_$Create$();
  }
  var EMPTY_BYTE_ARRAY;
  function readInternal($this, buffer, offset, len, $completion) {
    var tmp = new $readInternalCOROUTINE$225($this, buffer, offset, len, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function AsyncStream$read$slambda(this$0, $buffer, $offset, $len, resultContinuation) {
    this.j3d_1 = this$0;
    this.k3d_1 = $buffer;
    this.l3d_1 = $offset;
    this.m3d_1 = $len;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncStream$read$slambda).n3d = function ($completion) {
    var tmp = this.j2m($completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(AsyncStream$read$slambda).xc = function ($completion) {
    return this.n3d($completion);
  };
  protoOf(AsyncStream$read$slambda).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = readInternal(this.j3d_1, this.k3d_1, this.l3d_1, this.m3d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  protoOf(AsyncStream$read$slambda).j2m = function (completion) {
    return new AsyncStream$read$slambda(this.j3d_1, this.k3d_1, this.l3d_1, this.m3d_1, completion);
  };
  function AsyncStream$read$slambda_0(this$0, $buffer, $offset, $len, resultContinuation) {
    var i = new AsyncStream$read$slambda(this$0, $buffer, $offset, $len, resultContinuation);
    var l = function ($completion) {
      return i.n3d($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $readCOROUTINE$223(_this__u8e3s4, buffer, offset, len, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w3d_1 = _this__u8e3s4;
    this.x3d_1 = buffer;
    this.y3d_1 = offset;
    this.z3d_1 = len;
  }
  protoOf($readCOROUTINE$223).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            if (this.w3d_1.e2u_1) {
              this.bc_1 = 2;
              suspendResult = this.w3d_1.g2u_1.l2m(AsyncStream$read$slambda_0(this.w3d_1, this.x3d_1, this.y3d_1, this.z3d_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 1;
              suspendResult = readInternal(this.w3d_1, this.x3d_1, this.y3d_1, this.z3d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.a3e_1 = suspendResult;
            this.bc_1 = 3;
            continue $sm;
          case 2:
            this.a3e_1 = suspendResult;
            this.bc_1 = 3;
            continue $sm;
          case 3:
            return this.a3e_1;
          case 4:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 4) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readInternalCOROUTINE$225(_this__u8e3s4, buffer, offset, len, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x3c_1 = _this__u8e3s4;
    this.y3c_1 = buffer;
    this.z3c_1 = offset;
    this.a3d_1 = len;
  }
  protoOf($readInternalCOROUTINE$225).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.x3c_1.c2u_1.e2x(this.x3c_1.d2u_1, this.y3c_1, this.z3c_1, this.a3d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var read = suspendResult;
            if (read >= 0) {
              var tmp0_this = this.x3c_1;
              var tmp_0 = tmp0_this;
              tmp_0.d2u_1 = tmp0_this.d2u_1.pb(toLong(read));
            }

            return read;
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $getAvailableCOROUTINE$227(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j3e_1 = _this__u8e3s4;
  }
  protoOf($getAvailableCOROUTINE$227).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.bc_1 = 1;
            suspendResult = this.j3e_1.q2w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k3e_1 = suspendResult;
            this.bc_1 = 2;
            suspendResult = this.j3e_1.l3e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return this.k3e_1.ia(ARGUMENT);
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function AsyncStream(base, position, queue) {
    position = position === VOID ? new Long(0, 0) : position;
    queue = queue === VOID ? false : queue;
    this.c2u_1 = base;
    this.d2u_1 = position;
    this.e2u_1 = queue;
    this.f2u_1 = new Mixin();
    this.g2u_1 = new AsyncThread();
    this.h2u_1 = new AsyncThread();
  }
  protoOf(AsyncStream).u14 = function (_set____db54di) {
    this.f2u_1.u14(_set____db54di);
  };
  protoOf(AsyncStream).v14 = function () {
    return this.f2u_1.v14();
  };
  protoOf(AsyncStream).toString = function () {
    return 'AsyncStream(' + this.c2u_1 + ', position=' + this.d2u_1.toString() + ')';
  };
  protoOf(AsyncStream).r32 = function (buffer, offset, len, $completion) {
    var tmp = new $readCOROUTINE$223(this, buffer, offset, len, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(AsyncStream).l3e = function ($completion) {
    return this.d2u_1;
  };
  protoOf(AsyncStream).q2w = function ($completion) {
    return this.c2u_1.q2w($completion);
  };
  protoOf(AsyncStream).m3e = function ($completion) {
    return this.f2x($completion);
  };
  protoOf(AsyncStream).n3e = function ($completion) {
    var tmp = new $getAvailableCOROUTINE$227(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(AsyncStream).g2t = function ($completion) {
    return this.c2u_1.g2t($completion);
  };
  function readBytesUpTo(_this__u8e3s4, len, $completion) {
    var tmp = new $readBytesUpToCOROUTINE$230(_this__u8e3s4, len, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function readAll(_this__u8e3s4, $completion) {
    var tmp = new $readAllCOROUTINE$239(_this__u8e3s4, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function $hasLengthCOROUTINE$241(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m3g_1 = _this__u8e3s4;
  }
  protoOf($hasLengthCOROUTINE$241).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.m3g_1.q2w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.n3g_1 = ARGUMENT.g6(new Long(0, 0)) >= 0;
            this.cc_1 = 3;
            this.bc_1 = 4;
            continue $sm;
          case 2:
            this.cc_1 = 3;
            var tmp_0 = this.ec_1;
            if (tmp_0 instanceof UnsupportedOperationException) {
              var t = this.ec_1;
              var tmp_1 = this;
              tmp_1.n3g_1 = false;
              this.bc_1 = 4;
              continue $sm;
            } else {
              throw this.ec_1;
            }

          case 3:
            throw this.ec_1;
          case 4:
            this.cc_1 = 3;
            return this.n3g_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function AsyncGetLengthStream() {
  }
  function buffered(_this__u8e3s4, blockSize, blocksToRead) {
    blockSize = blockSize === VOID ? 2048 : blockSize;
    blocksToRead = blocksToRead === VOID ? 16 : blocksToRead;
    _init_properties_AsyncStream_kt__y7xune();
    return toAsyncStream(new BufferedStreamBase(_this__u8e3s4.c2u_1, blockSize, blocksToRead), _this__u8e3s4.d2u_1);
  }
  function toAsyncStream(_this__u8e3s4, position) {
    position = position === VOID ? new Long(0, 0) : position;
    _init_properties_AsyncStream_kt__y7xune();
    return new AsyncStream(_this__u8e3s4, position);
  }
  function AsyncStreamBase() {
  }
  protoOf(AsyncStreamBase).e2x = function (position, buffer, offset, len, $completion) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(AsyncStreamBase).q2w = function ($completion) {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  protoOf(AsyncStreamBase).g2t = function ($completion) {
    return Unit_instance;
  };
  function readBytesExact(_this__u8e3s4, len, $completion) {
    var tmp = new $readBytesExactCOROUTINE$244(_this__u8e3s4, len, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function AsyncPositionLengthStream() {
  }
  function readBytesUpToCopy(_this__u8e3s4, out, $completion) {
    var tmp = new $readBytesUpToCopyCOROUTINE$247(_this__u8e3s4, out, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function getAvailable(_this__u8e3s4, $completion) {
    var tmp = new $getAvailableCOROUTINE$248(_this__u8e3s4, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function AsyncGetPositionStream() {
  }
  function MemoryAsyncStreamBase_init_$Init$(initialCapacity, $this) {
    initialCapacity = initialCapacity === VOID ? 4096 : initialCapacity;
    MemoryAsyncStreamBase.call($this, ByteArrayBuilder_init_$Create$(initialCapacity));
    return $this;
  }
  function MemoryAsyncStreamBase_init_$Create$(initialCapacity) {
    return MemoryAsyncStreamBase_init_$Init$(initialCapacity, objectCreate(protoOf(MemoryAsyncStreamBase)));
  }
  function MemoryAsyncStreamBase(data) {
    AsyncStreamBase.call(this);
    this.u3h_1 = data;
  }
  protoOf(MemoryAsyncStreamBase).v3h = function () {
    return this.u3h_1.l();
  };
  protoOf(MemoryAsyncStreamBase).q2w = function ($completion) {
    return toLong(this.v3h());
  };
  protoOf(MemoryAsyncStreamBase).w3h = function (position) {
    if (position.g6(new Long(0, 0)) < 0) {
      invalidOp('Invalid position ' + position.toString());
    }
  };
  protoOf(MemoryAsyncStreamBase).e2x = function (position, buffer, offset, len, $completion) {
    this.w3h(position);
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = until(0, this.v3h());
    if (!contains_1(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), position))
      return 0;
    // Inline function 'kotlin.math.min' call
    var a = toLong(this.v3h());
    // Inline function 'kotlin.Long.plus' call
    var b = position.pb(toLong(len));
    var end = a.g6(b) <= 0 ? a : b;
    // Inline function 'kotlin.math.max' call
    var a_0 = end.ia(position).qa();
    var actualLen = Math.max(a_0, 0);
    arraycopy_0(this.u3h_1.i1w_1, position.qa(), buffer, offset, actualLen);
    return actualLen;
  };
  protoOf(MemoryAsyncStreamBase).g2t = function ($completion) {
    return Unit_instance;
  };
  protoOf(MemoryAsyncStreamBase).toString = function () {
    return 'MemoryAsyncStreamBase(' + this.u3h_1.l() + ')';
  };
  function $_readCOROUTINE$253(_this__u8e3s4, position, buffer, offset, len, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f3i_1 = _this__u8e3s4;
    this.g3i_1 = position;
    this.h3i_1 = buffer;
    this.i3i_1 = offset;
    this.j3i_1 = len;
  }
  protoOf($_readCOROUTINE$253).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 7;
            this.bc_1 = 1;
            suspendResult = this.f3i_1.n3i_1.f2x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              this.bc_1 = 2;
              suspendResult = this.f3i_1.n3i_1.q2w(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.k3i_1 = false;
              this.bc_1 = 3;
              continue $sm;
            }

          case 2:
            this.l3i_1 = suspendResult;
            this.k3i_1 = this.g3i_1.g6(this.l3i_1) >= 0;
            this.bc_1 = 3;
            continue $sm;
          case 3:
            if (this.k3i_1) {
              return -1;
            } else {
              this.bc_1 = 4;
              continue $sm;
            }

          case 4:
            var tmp_0 = this;
            var this_0 = this.g3i_1;
            var other = this.f3i_1.q3i_1;
            tmp_0.m3i_1 = this_0.s9(toLong(other));
            if (!this.f3i_1.s3i_1.equals(this.m3i_1)) {
              this.bc_1 = 5;
              var this_1 = this.m3i_1;
              var other_0 = this.f3i_1.q3i_1;
              suspendResult = readBytes(this.f3i_1.n3i_1, this_1.t9(toLong(other_0)), this.f3i_1.q3i_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 6;
              continue $sm;
            }

          case 5:
            var ARGUMENT = suspendResult;
            this.f3i_1.r3i_1 = ARGUMENT;
            this.f3i_1.s3i_1 = this.m3i_1;
            this.bc_1 = 6;
            continue $sm;
          case 6:
            var this_2 = this.g3i_1;
            var other_1 = this.f3i_1.q3i_1;
            var soffset = this_2.qb(toLong(other_1)).qa();
            var available = this.f3i_1.r3i_1.length - soffset | 0;
            var b = this.j3i_1;
            var toRead = Math.min(available, b);
            arraycopy_0(this.f3i_1.r3i_1, soffset, this.h3i_1, this.i3i_1, toRead);
            return toRead;
          case 7:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 7) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function BufferedStreamBase(base, blockSize, blocksToRead) {
    blockSize = blockSize === VOID ? 2048 : blockSize;
    blocksToRead = blocksToRead === VOID ? 16 : blocksToRead;
    AsyncStreamBase.call(this);
    this.n3i_1 = base;
    this.o3i_1 = blockSize;
    this.p3i_1 = blocksToRead;
    this.q3i_1 = imul(this.o3i_1, this.p3i_1);
    var tmp = this;
    // Inline function 'kotlin.byteArrayOf' call
    tmp.r3i_1 = new Int8Array([]);
    this.s3i_1 = new Long(-1, -1);
  }
  protoOf(BufferedStreamBase).e2x = function (position, buffer, offset, len, $completion) {
    return this.t3i(position, buffer, offset, len, $completion);
  };
  protoOf(BufferedStreamBase).t3i = function (position, buffer, offset, len, $completion) {
    var tmp = new $_readCOROUTINE$253(this, position, buffer, offset, len, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(BufferedStreamBase).q2w = function ($completion) {
    return this.n3i_1.q2w($completion);
  };
  protoOf(BufferedStreamBase).g2t = function ($completion) {
    return this.n3i_1.g2t($completion);
  };
  function readExact(_this__u8e3s4, buffer, offset, len, $completion) {
    var tmp = new $readExactCOROUTINE$254(_this__u8e3s4, buffer, offset, len, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function readBytesUpTo_0(_this__u8e3s4, out, offset, len, $completion) {
    var tmp = new $readBytesUpToCOROUTINE$256(_this__u8e3s4, out, offset, len, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function readBytes(_this__u8e3s4, position, count, $completion) {
    var tmp = new $readBytesCOROUTINE$257(_this__u8e3s4, position, count, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  }
  function $readBytesUpToCOROUTINE$230(_this__u8e3s4, len, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w3e_1 = _this__u8e3s4;
    this.x3e_1 = len;
  }
  protoOf($readBytesUpToCOROUTINE$230).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 10;
            this.y3e_1 = 4096;
            if (this.x3e_1 <= this.y3e_1) {
              this.bc_1 = 9;
              suspendResult = readBytesUpToCopy(this.w3e_1, new Int8Array(this.x3e_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 1;
              continue $sm;
            }

          case 1:
            var tmp_0 = this.w3e_1;
            if (isInterface(tmp_0, AsyncPositionLengthStream)) {
              var tmp_1 = this;
              tmp_1.z3e_1 = this.x3e_1;
              this.bc_1 = 7;
              suspendResult = getAvailable(this.w3e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 2;
              continue $sm;
            }

          case 2:
            this.a3f_1 = this.x3e_1;
            this.b3f_1 = new Int8Array(this.y3e_1);
            this.c3f_1 = ByteArrayBuilder_init_$Create$();
            this.bc_1 = 3;
            continue $sm;
          case 3:
            if (!(this.a3f_1 > 0)) {
              this.bc_1 = 6;
              continue $sm;
            }

            this.bc_1 = 4;
            var a = this.b3f_1.length;
            var b = this.a3f_1;
            suspendResult = this.w3e_1.r32(this.b3f_1, 0, Math.min(a, b), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.d3f_1 = suspendResult;
            if (this.d3f_1 <= 0) {
              this.bc_1 = 6;
              continue $sm;
            } else {
              this.bc_1 = 5;
              continue $sm;
            }

          case 5:
            this.c3f_1.l1w(this.b3f_1, 0, this.d3f_1);
            this.a3f_1 = this.a3f_1 - this.d3f_1 | 0;
            this.bc_1 = 3;
            continue $sm;
          case 6:
            return this.c3f_1.n1w();
          case 7:
            this.e3f_1 = suspendResult;
            this.f3f_1 = toIntClamp(this.e3f_1);
            this.g3f_1 = Math.min(this.z3e_1, this.f3f_1);
            this.h3f_1 = new Int8Array(this.g3f_1);
            this.bc_1 = 8;
            suspendResult = readBytesUpToCopy(this.w3e_1, this.h3f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return suspendResult;
          case 9:
            return suspendResult;
          case 10:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 10) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readAllCOROUTINE$239(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q3f_1 = _this__u8e3s4;
  }
  protoOf($readAllCOROUTINE$239).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 18;
            this.bc_1 = 1;
            continue $sm;
          case 1:
            this.cc_1 = 16;
            var tmp_0;
            var tmp_1 = this.q3f_1;
            if (isInterface(tmp_1, AsyncGetPositionStream)) {
              var tmp_2 = this.q3f_1;
              tmp_0 = isInterface(tmp_2, AsyncGetLengthStream);
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              this.bc_1 = 10;
              suspendResult = this.q3f_1.q2w(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_3 = this.q3f_1;
              if (tmp_3 instanceof AsyncStream) {
                this.bc_1 = 2;
                suspendResult = this.q3f_1.m3e(this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.t3f_1 = false;
                this.bc_1 = 3;
                continue $sm;
              }
            }

          case 2:
            this.t3f_1 = suspendResult;
            this.bc_1 = 3;
            continue $sm;
          case 3:
            if (this.t3f_1) {
              this.bc_1 = 8;
              suspendResult = this.q3f_1.n3e(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.u3f_1 = ByteArrayBuilder_init_$Create$();
              this.v3f_1 = new Int8Array(4096);
              this.bc_1 = 4;
              continue $sm;
            }

          case 4:
            if (!true) {
              this.bc_1 = 7;
              continue $sm;
            }

            this.bc_1 = 5;
            suspendResult = this.q3f_1.r32(this.v3f_1, 0, this.v3f_1.length, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.w3f_1 = suspendResult;
            if (this.w3f_1 <= 0) {
              this.bc_1 = 7;
              continue $sm;
            } else {
              this.bc_1 = 6;
              continue $sm;
            }

          case 6:
            this.u3f_1.l1w(this.v3f_1, 0, this.w3f_1);
            this.bc_1 = 4;
            continue $sm;
          case 7:
            this.s3f_1 = this.u3f_1.n1w();
            this.bc_1 = 13;
            continue $sm;
          case 8:
            this.x3f_1 = suspendResult;
            this.y3f_1 = this.x3f_1.qa();
            this.bc_1 = 9;
            suspendResult = readBytesExact(this.q3f_1, this.y3f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.s3f_1 = suspendResult;
            this.bc_1 = 13;
            continue $sm;
          case 10:
            this.z3f_1 = suspendResult;
            this.bc_1 = 11;
            suspendResult = this.q3f_1.l3e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            this.a3g_1 = suspendResult;
            this.b3g_1 = this.z3f_1.ia(this.a3g_1);
            this.bc_1 = 12;
            suspendResult = readBytesExact(this.q3f_1, this.b3g_1.qa(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            this.s3f_1 = suspendResult;
            this.bc_1 = 13;
            continue $sm;
          case 13:
            this.r3f_1 = this.s3f_1;
            this.cc_1 = 18;
            this.bc_1 = 14;
            continue $sm;
          case 14:
            this.c3g_1 = this.r3f_1;
            this.cc_1 = 18;
            this.bc_1 = 15;
            suspendResult = this.q3f_1.g2t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 15:
            return this.c3g_1;
          case 16:
            this.cc_1 = 18;
            this.d3g_1 = this.ec_1;
            this.bc_1 = 17;
            suspendResult = this.q3f_1.g2t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            throw this.d3g_1;
          case 18:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 18) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readBytesExactCOROUTINE$244(_this__u8e3s4, len, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w3g_1 = _this__u8e3s4;
    this.x3g_1 = len;
  }
  protoOf($readBytesExactCOROUTINE$244).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            var tmp_0 = this;
            tmp_0.y3g_1 = new Int8Array(this.x3g_1);
            var tmp_1 = this;
            tmp_1.z3g_1 = this.y3g_1;
            this.bc_1 = 1;
            suspendResult = readExact(this.w3g_1, this.z3g_1, 0, this.x3g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.y3g_1;
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readBytesUpToCopyCOROUTINE$247(_this__u8e3s4, out, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i3h_1 = _this__u8e3s4;
    this.j3h_1 = out;
  }
  protoOf($readBytesUpToCopyCOROUTINE$247).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = readBytesUpTo_0(this.i3h_1, this.j3h_1, 0, this.j3h_1.length, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var pos = suspendResult;
            return this.j3h_1.length === pos ? this.j3h_1 : copyOf(this.j3h_1, pos);
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $getAvailableCOROUTINE$248(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s3h_1 = _this__u8e3s4;
  }
  protoOf($getAvailableCOROUTINE$248).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.bc_1 = 1;
            suspendResult = this.s3h_1.q2w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t3h_1 = suspendResult;
            this.bc_1 = 2;
            suspendResult = this.s3h_1.l3e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return this.t3h_1.ia(ARGUMENT);
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readExactCOROUTINE$254(_this__u8e3s4, buffer, offset, len, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c3j_1 = _this__u8e3s4;
    this.d3j_1 = buffer;
    this.e3j_1 = offset;
    this.f3j_1 = len;
  }
  protoOf($readExactCOROUTINE$254).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 5;
            this.g3j_1 = this.f3j_1;
            this.h3j_1 = this.e3j_1;
            this.i3j_1 = this.c3j_1;
            this.bc_1 = 1;
            continue $sm;
          case 1:
            if (!(this.g3j_1 > 0)) {
              this.bc_1 = 4;
              continue $sm;
            }

            this.bc_1 = 2;
            suspendResult = this.i3j_1.r32(this.d3j_1, this.h3j_1, this.g3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var read = suspendResult;
            if (read < 0) {
              this.bc_1 = 4;
              continue $sm;
            } else {
              this.bc_1 = 3;
              continue $sm;
            }

          case 3:
            if (read === 0)
              throw new EOFException('Not enough data. Expected=' + this.f3j_1 + ', Read=' + (this.f3j_1 - this.g3j_1 | 0) + ', Remaining=' + this.g3j_1);
            this.h3j_1 = this.h3j_1 + read | 0;
            this.g3j_1 = this.g3j_1 - read | 0;
            this.bc_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 5) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readBytesUpToCOROUTINE$256(_this__u8e3s4, out, offset, len, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r3j_1 = _this__u8e3s4;
    this.s3j_1 = out;
    this.t3j_1 = offset;
    this.u3j_1 = len;
  }
  protoOf($readBytesUpToCOROUTINE$256).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            this.v3j_1 = 0;
            this.w3j_1 = this.u3j_1;
            this.x3j_1 = this.t3j_1;
            this.bc_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.bc_1 = 5;
              continue $sm;
            }

            this.bc_1 = 2;
            suspendResult = this.r3j_1.r32(this.s3j_1, this.x3j_1, this.w3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            if (result <= 0) {
              this.bc_1 = 5;
              continue $sm;
            } else {
              this.bc_1 = 3;
              continue $sm;
            }

          case 3:
            this.x3j_1 = this.x3j_1 + result | 0;
            this.w3j_1 = this.w3j_1 - result | 0;
            this.v3j_1 = this.v3j_1 + result | 0;
            this.bc_1 = 1;
            continue $sm;
          case 4:
            throw this.ec_1;
          case 5:
            return this.v3j_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 4) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $readBytesCOROUTINE$257(_this__u8e3s4, position, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g3k_1 = _this__u8e3s4;
    this.h3k_1 = position;
    this.i3k_1 = count;
  }
  protoOf($readBytesCOROUTINE$257).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.j3k_1 = new Int8Array(this.i3k_1);
            this.bc_1 = 1;
            suspendResult = this.g3k_1.e2x(this.h3k_1, this.j3k_1, 0, this.j3k_1.length, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var readLen = suspendResult;
            return copyOf(this.j3k_1, readLen);
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_AsyncStream_kt_gaoyh8;
  function _init_properties_AsyncStream_kt__y7xune() {
    if (!properties_initialized_AsyncStream_kt_gaoyh8) {
      properties_initialized_AsyncStream_kt_gaoyh8 = true;
      EMPTY_BYTE_ARRAY = new Int8Array(0);
    }
  }
  function openAsync(_this__u8e3s4, mode) {
    mode = mode === VOID ? 'r' : mode;
    return toAsyncStream(new MemoryAsyncStreamBase(new ByteArrayBuilder(_this__u8e3s4, VOID, true)), new Long(0, 0));
  }
  function SyncStream(base, position) {
    position = position === VOID ? new Long(0, 0) : position;
    this.k3k_1 = base;
    this.l3k_1 = new Mixin();
    this.m3k_1 = this.k3k_1.s3k_1;
    this.n3k_1 = this.k3k_1.t3k();
    this.o3k_1 = position;
    this.p3k_1 = position;
    this.q3k_1 = position;
    this.r3k_1 = new Long(0, 0);
  }
  protoOf(SyncStream).u14 = function (_set____db54di) {
    this.l3k_1.u14(_set____db54di);
  };
  protoOf(SyncStream).v14 = function () {
    return this.l3k_1.v14();
  };
  protoOf(SyncStream).u3k = function (value) {
    if (this.n3k_1)
      this.o3k_1 = value;
    else {
      this.v3k(value);
    }
  };
  protoOf(SyncStream).w3k = function () {
    return this.n3k_1 ? this.o3k_1 : this.x3k();
  };
  protoOf(SyncStream).v3k = function (value) {
    var tmp;
    if (this.n3k_1) {
      this.u3k(value);
      tmp = Unit_instance;
    } else {
      this.q3k_1 = value;
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SyncStream).x3k = function () {
    return this.n3k_1 ? this.w3k() : this.q3k_1;
  };
  protoOf(SyncStream).y3k = function (buffer, offset, len) {
    var read = this.k3k_1.z3k(this.w3k(), buffer, offset, len);
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = this.w3k().pb(toLong(read));
    this.u3k(tmp$ret$0);
    return read;
  };
  protoOf(SyncStream).a = function () {
    return this.k3k_1.a();
  };
  protoOf(SyncStream).r13 = function () {
    return this.k3k_1.r13();
  };
  protoOf(SyncStream).toString = function () {
    return 'SyncStream(' + this.k3k_1 + ', ' + this.x3k().toString() + ')';
  };
  function openSync(_this__u8e3s4, mode) {
    mode = mode === VOID ? 'r' : mode;
    return toSyncStream(new MemorySyncStreamBase(new ByteArrayBuilder(_this__u8e3s4)), new Long(0, 0));
  }
  function readString(_this__u8e3s4, len, charset) {
    charset = charset === VOID ? get_UTF8() : charset;
    return toString_3(readBytes_0(_this__u8e3s4, len), charset);
  }
  function SyncStreamBase() {
    this.s3k_1 = new Int8Array(16);
  }
  protoOf(SyncStreamBase).t3k = function () {
    return false;
  };
  protoOf(SyncStreamBase).z3k = function (position, buffer, offset, len) {
    unsupported_0();
  };
  protoOf(SyncStreamBase).a = function () {
    unsupported_0();
  };
  protoOf(SyncStreamBase).r13 = function () {
    return Unit_instance;
  };
  function MemorySyncStreamBase_init_$Init$(initialCapacity, $this) {
    initialCapacity = initialCapacity === VOID ? 4096 : initialCapacity;
    MemorySyncStreamBase.call($this, ByteArrayBuilder_init_$Create$(initialCapacity));
    return $this;
  }
  function MemorySyncStreamBase_init_$Create$(initialCapacity) {
    return MemorySyncStreamBase_init_$Init$(initialCapacity, objectCreate(protoOf(MemorySyncStreamBase)));
  }
  function MemorySyncStreamBase(data) {
    SyncStreamBase.call(this);
    this.b3l_1 = data;
  }
  protoOf(MemorySyncStreamBase).v3h = function () {
    return this.b3l_1.l();
  };
  protoOf(MemorySyncStreamBase).a = function () {
    return toLong(this.b3l_1.l());
  };
  protoOf(MemorySyncStreamBase).w3h = function (position) {
    if (position.g6(new Long(0, 0)) < 0) {
      invalidOp('Invalid position ' + position.toString());
    }
  };
  protoOf(MemorySyncStreamBase).z3k = function (position, buffer, offset, len) {
    this.w3h(position);
    var ipos = position.qa();
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = until(0, this.v3h());
    if (!contains_1(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), position))
      return 0;
    // Inline function 'kotlin.math.min' call
    var a = this.v3h();
    var b = ipos + len | 0;
    var end = Math.min(a, b);
    // Inline function 'kotlin.math.max' call
    var a_0 = end - ipos | 0;
    var actualLen = Math.max(a_0, 0);
    arraycopy_0(this.b3l_1.i1w_1, ipos, buffer, offset, actualLen);
    return actualLen;
  };
  protoOf(MemorySyncStreamBase).r13 = function () {
    return Unit_instance;
  };
  protoOf(MemorySyncStreamBase).toString = function () {
    return 'MemorySyncStreamBase(' + this.b3l_1.l() + ')';
  };
  function toSyncStream(_this__u8e3s4, position) {
    position = position === VOID ? new Long(0, 0) : position;
    return new SyncStream(_this__u8e3s4, position);
  }
  function sliceWithBounds(_this__u8e3s4, start, end) {
    var len = _this__u8e3s4.a();
    var clampedStart = clamp_0(start, new Long(0, 0), len);
    var clampedEnd = clamp_0(end, new Long(0, 0), len);
    var tmp = _this__u8e3s4.k3k_1;
    if (tmp instanceof SliceSyncStreamBase) {
      return toSyncStream(new SliceSyncStreamBase(_this__u8e3s4.k3k_1.d3l_1, _this__u8e3s4.k3k_1.e3l_1.pb(clampedStart), _this__u8e3s4.k3k_1.e3l_1.pb(clampedEnd)));
    } else {
      return toSyncStream(new SliceSyncStreamBase(_this__u8e3s4.k3k_1, clampedStart, clampedEnd));
    }
  }
  function readBytes_0(_this__u8e3s4, len) {
    var bytes = new Int8Array(len);
    var out = _this__u8e3s4.y3k(bytes, 0, len);
    return !(out === len) ? copyOf(bytes, out) : bytes;
  }
  function clampPosition($this, position) {
    return clamp_0(position, $this.e3l_1, $this.f3l_1);
  }
  function clampPositionLen($this, position, len) {
    if (position.g6(new Long(0, 0)) < 0)
      throw IllegalArgumentException_init_$Create$('Invalid position');
    var targetStartPosition = clampPosition($this, $this.e3l_1.pb(position));
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = targetStartPosition.pb(toLong(len));
    var targetEndPosition = clampPosition($this, tmp$ret$0);
    var targetLen = targetEndPosition.ia(targetStartPosition).qa();
    return new Pair(targetStartPosition, targetLen);
  }
  function SliceSyncStreamBase(base, baseStart, baseEnd) {
    SyncStreamBase.call(this);
    this.d3l_1 = base;
    this.e3l_1 = baseStart;
    this.f3l_1 = baseEnd;
    this.g3l_1 = this.f3l_1.ia(this.e3l_1);
  }
  protoOf(SliceSyncStreamBase).t3k = function () {
    return this.d3l_1.t3k();
  };
  protoOf(SliceSyncStreamBase).a = function () {
    return this.g3l_1;
  };
  protoOf(SliceSyncStreamBase).z3k = function (position, buffer, offset, len) {
    var tmp0_container = clampPositionLen(this, position, len);
    var targetStartPosition = tmp0_container.re();
    var targetLen = tmp0_container.se();
    return this.d3l_1.z3k(targetStartPosition, buffer, offset, targetLen);
  };
  protoOf(SliceSyncStreamBase).r13 = function () {
    return Unit_instance;
  };
  protoOf(SliceSyncStreamBase).toString = function () {
    return 'SliceAsyncStreamBase(' + this.d3l_1 + ', ' + this.e3l_1.toString() + ', ' + this.f3l_1.toString() + ')';
  };
  function sliceStart(_this__u8e3s4, start) {
    start = start === VOID ? new Long(0, 0) : start;
    return sliceWithBounds(_this__u8e3s4, start, _this__u8e3s4.a());
  }
  function isWhitespaceFast(_this__u8e3s4) {
    return ((_this__u8e3s4 === _Char___init__impl__6a9atx(32) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(9)) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(13)) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(10);
  }
  function isPrintable(_this__u8e3s4) {
    return (_Char___init__impl__6a9atx(32) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(126) : false) ? true : _Char___init__impl__6a9atx(161) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(255) : false;
  }
  function Text() {
  }
  function Marker() {
  }
  function Line(str) {
    this.i3l_1 = str;
  }
  protoOf(Line).h3l = function () {
    return this.i3l_1;
  };
  protoOf(Line).toString = function () {
    return 'Line(str=' + this.i3l_1 + ')';
  };
  protoOf(Line).hashCode = function () {
    return getStringHashCode(this.i3l_1);
  };
  protoOf(Line).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Line))
      return false;
    var tmp0_other_with_cast = other instanceof Line ? other : THROW_CCE();
    if (!(this.i3l_1 === tmp0_other_with_cast.i3l_1))
      return false;
    return true;
  };
  function LineDeferred() {
  }
  function EmptyLineOnce() {
  }
  var EmptyLineOnce_instance;
  function EmptyLineOnce_getInstance() {
    return EmptyLineOnce_instance;
  }
  function Indent() {
  }
  var Indent_instance;
  function Indent_getInstance() {
    return Indent_instance;
  }
  function Unindent() {
  }
  var Unindent_instance;
  function Unindent_getInstance() {
    return Unindent_instance;
  }
  function INDENTS() {
    INDENTS_instance = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(1024), null);
    while (tmp_0 < 1024) {
      tmp_1[tmp_0] = '';
      tmp_0 = tmp_0 + 1 | 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.util.INDENTS.INDENTS.<anonymous>' call
    var indent = StringBuilder_init_$Create$();
    var inductionVariable = 0;
    var last = tmp_1.length;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        tmp_1[n] = indent.toString();
        indent.f5('\t');
      }
       while (inductionVariable < last);
    tmp.j3l_1 = tmp_1;
  }
  protoOf(INDENTS).b1 = function (index) {
    if (index >= this.j3l_1.length) {
      // Inline function 'kotlin.TODO' call
      var reason = 'Too much indentation ' + index;
      throw new NotImplementedError('An operation is not implemented: ' + reason);
    }
    return index <= 0 ? '' : this.j3l_1[index];
  };
  var INDENTS_instance;
  function INDENTS_getInstance() {
    if (INDENTS_instance == null)
      new INDENTS();
    return INDENTS_instance;
  }
  function Companion_23() {
    Companion_instance_29 = this;
    var tmp = this;
    // Inline function 'korlibs.io.util.Companion.gen' call
    Companion_getInstance_30();
    var indenter = new Indenter();
    // Inline function 'korlibs.io.util.Companion.EMPTY.<anonymous>' call
    tmp.k3l_1 = indenter;
  }
  protoOf(Companion_23).l3l = function (init) {
    // Inline function 'korlibs.io.util.Companion.gen' call
    var indenter = new Indenter();
    init(indenter);
    return indenter;
  };
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_23();
    return Companion_instance_29;
  }
  function IndenterEvaluator(markHandler, indentEmptyLines, doIndent) {
    this.m3l_1 = markHandler;
    this.n3l_1 = indentEmptyLines;
    this.o3l_1 = doIndent;
    this.p3l_1 = StringBuilder_init_$Create$();
    this.q3l_1 = 0;
    this.r3l_1 = true;
    this.s3l_1 = 0;
    this.t3l_1 = false;
  }
  protoOf(IndenterEvaluator).u3l = function (str) {
    return this.p3l_1.f5(str);
  };
  protoOf(IndenterEvaluator).v3l = function (str) {
    return this.p3l_1.g5(str);
  };
  protoOf(IndenterEvaluator).w3l = function () {
    if (this.o3l_1) {
      this.v3l(_Char___init__impl__6a9atx(10));
    }
    this.q3l_1 = this.q3l_1 + 1 | 0;
    this.r3l_1 = true;
  };
  protoOf(IndenterEvaluator).x3l = function (actions) {
    // Inline function 'korlibs.datastructure.iterators.fastForEach' call
    var n = 0;
    while (n < actions.l()) {
      // Inline function 'korlibs.io.util.IndenterEvaluator.eval.<anonymous>' call
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      var action = actions.b1(tmp0);
      if (isInterface(action, Text)) {
        if (this.r3l_1) {
          var tmp;
          if (!this.n3l_1) {
            // Inline function 'kotlin.text.isEmpty' call
            var this_0 = action.h3l();
            tmp = charSequenceLength(this_0) === 0;
          } else {
            tmp = false;
          }
          if (tmp) {
            this.w3l();
          } else {
            if (this.o3l_1) {
              this.u3l(INDENTS_getInstance().b1(this.s3l_1));
            } else {
              this.u3l(' ');
            }
          }
        }
        this.u3l(action.h3l());
        if (action instanceof Line) {
          var tmp_0 = this;
          var tmp_1 = this.q3l_1;
          // Inline function 'kotlin.text.count' call
          var count = 0;
          var indexedObject = action.h3l();
          var inductionVariable = 0;
          while (inductionVariable < charSequenceLength(indexedObject)) {
            var element = charSequenceGet(indexedObject, inductionVariable);
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'korlibs.io.util.IndenterEvaluator.eval.<anonymous>.<anonymous>' call
            if (element === _Char___init__impl__6a9atx(10)) {
              count = count + 1 | 0;
            }
          }
          tmp_0.q3l_1 = tmp_1 + count | 0;
          this.w3l();
        } else {
          this.r3l_1 = false;
        }
        this.t3l_1 = true;
      } else {
        if (action instanceof LineDeferred) {
          this.x3l(action.c3m_1().z3l_1);
        } else {
          if (equals(action, Indent_instance) ? true : equals(action, Unindent_instance)) {
            this.t3l_1 = false;
            this.s3l_1 = this.s3l_1 + (equals(action, Indent_instance) ? 1 : -1) | 0;
          } else {
            if (equals(action, EmptyLineOnce_instance)) {
              if (this.t3l_1) {
                this.w3l();
                this.t3l_1 = false;
              }
            } else {
              if (action instanceof Marker) {
                var tmp3_safe_receiver = this.m3l_1;
                if (tmp3_safe_receiver == null)
                  null;
                else
                  tmp3_safe_receiver(this.p3l_1, this.q3l_1, action.y3l_1);
              }
            }
          }
        }
      }
    }
  };
  function Indenter(actions) {
    Companion_getInstance_30();
    var tmp;
    if (actions === VOID) {
      // Inline function 'kotlin.collections.arrayListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = actions;
    }
    actions = tmp;
    this.z3l_1 = actions;
    this.a3m_1 = true;
    this.b3m_1 = '';
  }
  protoOf(Indenter).d3m = function (indenter) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.util.Indenter.line.<anonymous>' call
    this.z3l_1.q(indenter.z3l_1);
    return this;
  };
  protoOf(Indenter).e3m = function (str) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.util.Indenter.line.<anonymous>' call
    this.z3l_1.p(new Line(str));
    return this;
  };
  protoOf(Indenter).f3m = function () {
    this.z3l_1.p(Indent_instance);
  };
  protoOf(Indenter).g3m = function () {
    this.z3l_1.p(Unindent_instance);
  };
  protoOf(Indenter).h3m = function (markHandler, doIndent) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IndenterEvaluator(markHandler, this.a3m_1, doIndent);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.util.Indenter.toString.<anonymous>' call
    this_0.x3l(this.z3l_1);
    return this_0.p3l_1.toString();
  };
  protoOf(Indenter).toString = function () {
    return this.h3m(null, true);
  };
  var MINUS_ZERO_D;
  function toStringDecimal(_this__u8e3s4, decimalPlaces, skipTrailingZeros) {
    skipTrailingZeros = skipTrailingZeros === VOID ? false : skipTrailingZeros;
    if (isNanOrInfinite(_this__u8e3s4))
      return _this__u8e3s4.toString();
    var res = normalizeZero(roundDecimalPlaces(_this__u8e3s4, decimalPlaces)).toString();
    var eup = indexOf_0(res, _Char___init__impl__6a9atx(69));
    var elo = indexOf_0(res, _Char___init__impl__6a9atx(101));
    var eIndex = eup >= 0 ? eup : elo;
    var tmp;
    if (eIndex >= 0) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var base = res.substring(0, eIndex);
      // Inline function 'kotlin.text.substring' call
      var startIndex = eIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = res.substring(startIndex);
      var exp = toInt_0(tmp$ret$3);
      var rbase = contains_0(base, '.') ? base : base + '.0';
      // Inline function 'kotlin.math.absoluteValue' call
      var tmp$ret$4 = abs(exp);
      var zeros = repeat('0', tmp$ret$4 + 2 | 0);
      var part = exp > 0 ? rbase + zeros : zeros + rbase;
      var pointIndex2 = indexOf(part, '.');
      var pointIndex = pointIndex2 < 0 ? part.length : pointIndex2;
      var outIndex = pointIndex + exp | 0;
      var part2 = replace_0(part, '.', '');
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.io.util.toStringDecimal.<anonymous>' call
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var this_1 = until(0, outIndex);
        var tmp_0;
        if (isInterface(this_1, Collection)) {
          tmp_0 = this_1.x();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$5 = true;
          break $l$block_0;
        }
        var tmp0_iterator = this_1.s();
        while (tmp0_iterator.t()) {
          var element = tmp0_iterator.u();
          // Inline function 'korlibs.io.util.toStringDecimal.<anonymous>.<anonymous>' call
          if (!(charSequenceGet(part2, element) === _Char___init__impl__6a9atx(48))) {
            tmp$ret$5 = false;
            break $l$block_0;
          }
        }
        tmp$ret$5 = true;
      }
      if (tmp$ret$5) {
        this_0.g5(_Char___init__impl__6a9atx(48));
      } else {
        this_0.o7(part2, 0, outIndex);
      }
      this_0.g5(_Char___init__impl__6a9atx(46));
      this_0.o7(part2, outIndex, part2.length);
      tmp = this_0.toString();
    } else {
      tmp = res;
    }
    var rez = tmp;
    var pointIndex_0 = indexOf_0(rez, _Char___init__impl__6a9atx(46));
    var tmp_1;
    if (pointIndex_0 >= 0) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = rez.substring(0, pointIndex_0);
    } else {
      tmp_1 = rez;
    }
    var integral = tmp_1;
    if (decimalPlaces === 0)
      return integral;
    var tmp_2;
    if (pointIndex_0 >= 0) {
      // Inline function 'kotlin.text.substring' call
      var startIndex_0 = pointIndex_0 + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$12 = rez.substring(startIndex_0);
      tmp_2 = trimEnd(tmp$ret$12, charArrayOf([_Char___init__impl__6a9atx(48)]));
    } else {
      tmp_2 = '';
    }
    var decimal = tmp_2;
    // Inline function 'kotlin.text.buildString' call
    var capacity = (2 + integral.length | 0) + decimalPlaces | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_2 = StringBuilder_init_$Create$_0(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.util.toStringDecimal.<anonymous>' call
    this_2.f5(integral);
    var tmp_3;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(decimal) > 0) {
      tmp_3 = true;
    } else {
      tmp_3 = !skipTrailingZeros;
    }
    if (tmp_3) {
      // Inline function 'kotlin.math.min' call
      var a = decimal.length;
      var decimalCount = Math.min(a, decimalPlaces);
      var tmp$ret$15;
      $l$block_2: {
        // Inline function 'kotlin.collections.all' call
        var this_3 = until(0, decimalCount);
        var tmp_4;
        if (isInterface(this_3, Collection)) {
          tmp_4 = this_3.x();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          tmp$ret$15 = true;
          break $l$block_2;
        }
        var tmp0_iterator_0 = this_3.s();
        while (tmp0_iterator_0.t()) {
          var element_0 = tmp0_iterator_0.u();
          // Inline function 'korlibs.io.util.toStringDecimal.<anonymous>.<anonymous>' call
          if (!(charSequenceGet(decimal, element_0) === _Char___init__impl__6a9atx(48))) {
            tmp$ret$15 = false;
            break $l$block_2;
          }
        }
        tmp$ret$15 = true;
      }
      var allZeros = tmp$ret$15;
      if (!skipTrailingZeros ? true : !allZeros) {
        this_2.g5(_Char___init__impl__6a9atx(46));
        this_2.o7(decimal, 0, decimalCount);
        if (!skipTrailingZeros) {
          // Inline function 'kotlin.repeat' call
          var times = decimalPlaces - decimalCount | 0;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          if (inductionVariable < times)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'korlibs.io.util.toStringDecimal.<anonymous>.<anonymous>' call
              this_2.g5(_Char___init__impl__6a9atx(48));
            }
             while (inductionVariable < times);
        }
      }
    }
    return this_2.toString();
  }
  function normalizeZero(_this__u8e3s4) {
    return _this__u8e3s4 === MINUS_ZERO_D ? 0.0 : _this__u8e3s4;
  }
  function NumberParser() {
  }
  protoOf(NumberParser).i3m = function (str, start, end, radix) {
    var positive = true;
    var out = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      loop: do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = charSequenceGet(str, n);
        if (c === _Char___init__impl__6a9atx(45) ? true : c === _Char___init__impl__6a9atx(43)) {
          positive = c === _Char___init__impl__6a9atx(43);
        } else {
          var value = ctypeAsInt(c);
          if (value < 0)
            break loop;
          out = imul(out, radix);
          out = out + value | 0;
        }
      }
       while (inductionVariable < end);
    return positive ? out : -out | 0;
  };
  protoOf(NumberParser).j3m = function (str, start, end) {
    var out = 0.0;
    var frac = 1.0;
    var pointSeen = false;
    var eSeen = false;
    var negate = false;
    var negateExponent = false;
    var exponent = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = charSequenceGet(str, n);
        if (c === _Char___init__impl__6a9atx(101) ? true : c === _Char___init__impl__6a9atx(69))
          eSeen = true;
        else if (c === _Char___init__impl__6a9atx(45)) {
          if (eSeen)
            negateExponent = true;
          else
            negate = true;
        } else if (c === _Char___init__impl__6a9atx(46))
          pointSeen = true;
        else {
          if (eSeen) {
            exponent = imul(exponent, 10);
            exponent = exponent + ctypeAsInt(c) | 0;
          } else {
            if (pointSeen)
              frac = frac / 10;
            out = out * 10;
            out = out + ctypeAsInt(c);
          }
        }
      }
       while (inductionVariable < end);
    var tmp = out * frac;
    // Inline function 'kotlin.math.pow' call
    var n_0 = negateExponent ? -exponent | 0 : exponent;
    var res = tmp * Math.pow(10.0, n_0);
    return negate ? -res : res;
  };
  var NumberParser_instance;
  function NumberParser_getInstance() {
    return NumberParser_instance;
  }
  function ctypeAsInt(_this__u8e3s4) {
    return (Char__compareTo_impl_ypi4mb(_this__u8e3s4, _Char___init__impl__6a9atx(48)) >= 0 ? Char__compareTo_impl_ypi4mb(_this__u8e3s4, _Char___init__impl__6a9atx(57)) <= 0 : false) ? Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(48)) : (Char__compareTo_impl_ypi4mb(_this__u8e3s4, _Char___init__impl__6a9atx(97)) >= 0 ? Char__compareTo_impl_ypi4mb(_this__u8e3s4, _Char___init__impl__6a9atx(122)) <= 0 : false) ? Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(97)) + 10 | 0 : (Char__compareTo_impl_ypi4mb(_this__u8e3s4, _Char___init__impl__6a9atx(65)) >= 0 ? Char__compareTo_impl_ypi4mb(_this__u8e3s4, _Char___init__impl__6a9atx(90)) <= 0 : false) ? Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(65)) + 10 | 0 : -1;
  }
  function Once() {
    this.k3m_1 = false;
  }
  function get_LONG_ZERO_TO_MAX_RANGE() {
    _init_properties_RangeExt_kt__vz0y4k();
    return LONG_ZERO_TO_MAX_RANGE;
  }
  var LONG_ZERO_TO_MAX_RANGE;
  var properties_initialized_RangeExt_kt_dqkq5i;
  function _init_properties_RangeExt_kt__vz0y4k() {
    if (!properties_initialized_RangeExt_kt_dqkq5i) {
      properties_initialized_RangeExt_kt_dqkq5i = true;
      var tmp = new Long(0, 0);
      Companion_getInstance_4();
      LONG_ZERO_TO_MAX_RANGE = tmp.ka(new Long(-1, 2147483647));
    }
  }
  function Companion_24() {
  }
  var Companion_instance_30;
  function Companion_getInstance_31() {
    return Companion_instance_30;
  }
  function posSkip($this, count) {
    var out = $this.d37_1;
    $this.d37_1 = $this.d37_1 + count | 0;
    return out;
  }
  function substr_1($this, pos, length) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = $this.b37_1;
    // Inline function 'kotlin.math.min' call
    var b = $this.f37_1;
    var startIndex = Math.min(pos, b);
    // Inline function 'kotlin.math.min' call
    var a = pos + length | 0;
    var b_0 = $this.f37_1;
    var endIndex = Math.min(a, b_0);
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.substring(startIndex, endIndex);
  }
  function StrReader(str, file, pos) {
    file = file === VOID ? 'file' : file;
    pos = pos === VOID ? 0 : pos;
    BaseStrReader.call(this);
    this.b37_1 = str;
    this.c37_1 = file;
    this.d37_1 = pos;
    this.e37_1 = charArray(this.b37_1.length);
    this.f37_1 = this.b37_1.length;
  }
  protoOf(StrReader).l3m = function () {
    return this.d37_1;
  };
  protoOf(StrReader).m3m = function () {
    return this.f37_1 - this.d37_1 | 0;
  };
  protoOf(StrReader).n3m = function () {
    return this.d37_1 >= this.b37_1.length;
  };
  protoOf(StrReader).o3m = function () {
    protoOf(BaseStrReader).o3m.call(this);
    return this;
  };
  protoOf(StrReader).p3m = function (count) {
    return substr_1(this, this.d37_1, count);
  };
  protoOf(StrReader).q3m = function () {
    return this.r3m() ? charSequenceGet(this.b37_1, this.d37_1) : _Char___init__impl__6a9atx(0);
  };
  protoOf(StrReader).s3m = function (count) {
    this.d37_1 = this.d37_1 - count | 0;
    return this;
  };
  protoOf(StrReader).t3m = function (count, $super) {
    count = count === VOID ? 1 : count;
    return $super === VOID ? this.s3m(count) : $super.s3m.call(this, count);
  };
  protoOf(StrReader).u3m = function () {
    return this.r3m() ? charSequenceGet(this.b37_1, posSkip(this, 1)) : _Char___init__impl__6a9atx(0);
  };
  protoOf(StrReader).v3m = function () {
    return this.r3m() ? charSequenceGet(this.b37_1, posSkip(this, 1)) : _Char___init__impl__6a9atx(0);
  };
  protoOf(StrReader).i37 = function () {
    return this.w3m(this.m3m());
  };
  protoOf(StrReader).x3m = function (count) {
    this.d37_1 = this.d37_1 + count | 0;
    return this;
  };
  protoOf(StrReader).y3m = function (lit, consume) {
    if (!substringEquals(StringCompanionObject_instance, this.b37_1, this.d37_1, lit, 0, lit.length))
      return null;
    if (consume) {
      this.d37_1 = this.d37_1 + lit.length | 0;
    }
    return lit;
  };
  protoOf(StrReader).g37 = function (v) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.b37_1;
    var startIndex = this.d37_1;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this_0.substring(startIndex);
    var tmp0_elvis_lhs = v.h8(tmp$ret$1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    var m = ensureNotNull(result.d9().b1(0)).p8_1;
    this.d37_1 = this.d37_1 + m.length | 0;
    return m;
  };
  protoOf(StrReader).z3m = function (count, radix) {
    // Inline function 'kotlin.math.min' call
    var a = this.m3m();
    var readCount = Math.min(a, count);
    this.x3m(readCount);
    return NumberParser_instance.i3m(this.b37_1, this.d37_1 - readCount | 0, this.d37_1, radix);
  };
  protoOf(StrReader).a3n = function (reportErrors) {
    var out = this.e37_1;
    var outp = 0;
    var quotec = this.v3m();
    if (!(quotec === _Char___init__impl__6a9atx(34) ? true : quotec === _Char___init__impl__6a9atx(39))) {
      invalidOp('Invalid string literal');
    }
    var closed = false;
    loop: while (this.r3m()) {
      var c = this.v3m();
      if (c === _Char___init__impl__6a9atx(92)) {
        var cc = this.v3m();
        var tmp2 = outp;
        outp = tmp2 + 1 | 0;
        var tmp;
        if (cc === _Char___init__impl__6a9atx(92)) {
          tmp = _Char___init__impl__6a9atx(92);
        } else if (cc === _Char___init__impl__6a9atx(47)) {
          tmp = _Char___init__impl__6a9atx(47);
        } else if (cc === _Char___init__impl__6a9atx(39)) {
          tmp = _Char___init__impl__6a9atx(39);
        } else if (cc === _Char___init__impl__6a9atx(34)) {
          tmp = _Char___init__impl__6a9atx(34);
        } else if (cc === _Char___init__impl__6a9atx(98)) {
          tmp = _Char___init__impl__6a9atx(8);
        } else if (cc === _Char___init__impl__6a9atx(102)) {
          tmp = _Char___init__impl__6a9atx(12);
        } else if (cc === _Char___init__impl__6a9atx(110)) {
          tmp = _Char___init__impl__6a9atx(10);
        } else if (cc === _Char___init__impl__6a9atx(114)) {
          tmp = _Char___init__impl__6a9atx(13);
        } else if (cc === _Char___init__impl__6a9atx(116)) {
          tmp = _Char___init__impl__6a9atx(9);
        } else if (cc === _Char___init__impl__6a9atx(117)) {
          tmp = numberToChar(this.z3m(4, 16));
        } else {
          throw new IOException("Invalid char '" + toString_0(cc) + "'");
        }
        out[tmp2] = tmp;
      } else if (c === quotec) {
        closed = true;
        break loop;
      } else {
        var tmp3 = outp;
        outp = tmp3 + 1 | 0;
        out[tmp3] = c;
      }
    }
    if (!closed ? reportErrors : false) {
      throw RuntimeException_init_$Create$("String literal not closed! '" + this.b37_1 + "'");
    }
    return String_fromCharArray(out, 0, outp);
  };
  protoOf(StrReader).b3n = function (reportErrors, $super) {
    reportErrors = reportErrors === VOID ? true : reportErrors;
    return $super === VOID ? this.a3n(reportErrors) : $super.a3n.call(this, reportErrors);
  };
  protoOf(StrReader).c3n = function (offset) {
    // Inline function 'kotlin.text.getOrElse' call
    var this_0 = this.b37_1;
    var index = this.d37_1 + offset | 0;
    var tmp;
    if (index >= 0 ? index <= get_lastIndex_0(this_0) : false) {
      tmp = charSequenceGet(this_0, index);
    } else {
      // Inline function 'korlibs.io.util.StrReader.peekOffset.<anonymous>' call
      tmp = _Char___init__impl__6a9atx(0);
    }
    return tmp;
  };
  function BaseStrReader() {
  }
  protoOf(BaseStrReader).r3m = function () {
    return !this.n3m();
  };
  protoOf(BaseStrReader).q3m = function () {
    return this.c3n(0);
  };
  protoOf(BaseStrReader).u3m = function () {
    var out = this.q3m();
    this.x3m(1);
    return out;
  };
  protoOf(BaseStrReader).d3n = function (expected) {
    var readed = this.u3m();
    if (!(readed === expected))
      throw IllegalArgumentException_init_$Create$("Expected '" + toString_0(expected) + "' but found '" + toString_0(readed) + "' at " + this.l3m());
  };
  protoOf(BaseStrReader).h37 = function (lit, consume, $super) {
    consume = consume === VOID ? true : consume;
    return $super === VOID ? this.y3m(lit, consume) : $super.y3m.call(this, lit, consume);
  };
  protoOf(BaseStrReader).o3m = function () {
    // Inline function 'korlibs.io.util.BaseStrReader.skipWhile' call
    $l$loop: while (true) {
      var tmp;
      if (this.r3m()) {
        // Inline function 'korlibs.io.util.BaseStrReader.skipSpaces.<anonymous>' call
        var it = this.q3m();
        tmp = isWhitespaceFast(it);
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.u3m();
    }
    return this;
  };
  protoOf(BaseStrReader).e3n = function (str) {
    return !(this.y3m(str, true) == null);
  };
  protoOf(BaseStrReader).w3m = function (count) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.p3m(count);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.util.BaseStrReader.read.<anonymous>' call
    this.x3m(count);
    return this_0;
  };
  function quote(_this__u8e3s4) {
    return quote_0(_this__u8e3s4, false);
  }
  function quote_0(_this__u8e3s4, unicode) {
    return !(_this__u8e3s4 == null) ? '"' + escape(_this__u8e3s4, unicode) + '"' : 'null';
  }
  function escape(_this__u8e3s4, unicode) {
    var out = StringBuilder_init_$Create$_0(_this__u8e3s4.length + 16 | 0);
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var c = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (c === _Char___init__impl__6a9atx(92)) {
        out.f5('\\\\');
      } else if (c === _Char___init__impl__6a9atx(34)) {
        out.f5('\\"');
      } else if (c === _Char___init__impl__6a9atx(10)) {
        out.f5('\\n');
      } else if (c === _Char___init__impl__6a9atx(13)) {
        out.f5('\\r');
      } else if (c === _Char___init__impl__6a9atx(9)) {
        out.f5('\\t');
      } else if (!unicode ? _Char___init__impl__6a9atx(0) <= c ? c <= _Char___init__impl__6a9atx(31) : false : false) {
        out.f5('\\x');
        // Inline function 'kotlin.code' call
        var tmp$ret$0 = Char__toInt_impl_vasixd(c);
        out.g5(charSequenceGet('0123456789abcdef', (tmp$ret$0 >>> 4 | 0) & 15));
        // Inline function 'kotlin.code' call
        var tmp$ret$1 = Char__toInt_impl_vasixd(c);
        out.g5(charSequenceGet('0123456789abcdef', (tmp$ret$1 >>> 0 | 0) & 15));
      } else if (unicode ? !isPrintable(c) : false) {
        out.f5('\\u');
        // Inline function 'kotlin.code' call
        var tmp$ret$2 = Char__toInt_impl_vasixd(c);
        out.g5(charSequenceGet('0123456789abcdef', (tmp$ret$2 >>> 12 | 0) & 15));
        // Inline function 'kotlin.code' call
        var tmp$ret$3 = Char__toInt_impl_vasixd(c);
        out.g5(charSequenceGet('0123456789abcdef', (tmp$ret$3 >>> 8 | 0) & 15));
        // Inline function 'kotlin.code' call
        var tmp$ret$4 = Char__toInt_impl_vasixd(c);
        out.g5(charSequenceGet('0123456789abcdef', (tmp$ret$4 >>> 4 | 0) & 15));
        // Inline function 'kotlin.code' call
        var tmp$ret$5 = Char__toInt_impl_vasixd(c);
        out.g5(charSequenceGet('0123456789abcdef', (tmp$ret$5 >>> 0 | 0) & 15));
      } else {
        out.g5(c);
      }
    }
    return out.toString();
  }
  function substringAfterOrNull(_this__u8e3s4, delimiter) {
    return contains(_this__u8e3s4, delimiter) ? substringAfter(_this__u8e3s4, delimiter) : null;
  }
  function substringBeforeOrNull(_this__u8e3s4, delimiter) {
    return contains(_this__u8e3s4, delimiter) ? substringBefore(_this__u8e3s4, delimiter) : null;
  }
  function get_DEBUG_WORKER() {
    _init_properties_Worker_kt__eidt7m();
    return DEBUG_WORKER;
  }
  var DEBUG_WORKER;
  function DemoWorkerTask$execute$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DemoWorkerTask$execute$slambda).o3n = function (params, $completion) {
    var tmp = this.p3n(params, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(DemoWorkerTask$execute$slambda).jd = function (p1, $completion) {
    return this.o3n((!(p1 == null) ? isInterface(p1, List) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DemoWorkerTask$execute$slambda).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        if (tmp === 0) {
          this.cc_1 = 1;
          println('TEST!!!!! ' + this.n3n_1);
          return 11;
        } else if (tmp === 1) {
          throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DemoWorkerTask$execute$slambda).p3n = function (params, completion) {
    var i = new DemoWorkerTask$execute$slambda(completion);
    i.n3n_1 = params;
    return i;
  };
  function DemoWorkerTask$execute$slambda_0(resultContinuation) {
    var i = new DemoWorkerTask$execute$slambda(resultContinuation);
    var l = function (params, $completion) {
      return i.o3n(params, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DemoWorkerTask() {
    WorkerTask.call(this);
  }
  protoOf(DemoWorkerTask).v3n = function () {
    return this.b3o(DemoWorkerTask$execute$slambda_0(null));
  };
  function WorkerTask$runSuspend$slambda($deferred, this$0, $block, resultContinuation) {
    this.p3o_1 = $deferred;
    this.q3o_1 = this$0;
    this.r3o_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WorkerTask$runSuspend$slambda).s2p = function ($completion) {
    var tmp = this.j2m($completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(WorkerTask$runSuspend$slambda).xc = function ($completion) {
    return this.s2p($completion);
  };
  protoOf(WorkerTask$runSuspend$slambda).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            var tmp_0 = this;
            tmp_0.s3o_1 = this.q3o_1;
            this.cc_1 = 2;
            var tmp_1 = this;
            tmp_1.u3o_1 = Companion_instance_3;
            var tmp_2 = this;
            tmp_2.v3o_1 = this.s3o_1;
            this.bc_1 = 1;
            suspendResult = this.r3o_1(this.v3o_1.d3o(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var value = suspendResult;
            this.t3o_1 = _Result___init__impl__xyqfz8(value);
            this.cc_1 = 4;
            this.bc_1 = 3;
            continue $sm;
          case 2:
            this.cc_1 = 4;
            var tmp_3 = this.ec_1;
            if (tmp_3 instanceof Error) {
              var e = this.ec_1;
              var tmp_4 = this;
              tmp_4.t3o_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.bc_1 = 3;
              continue $sm;
            } else {
              throw this.ec_1;
            }

          case 3:
            this.cc_1 = 4;
            var ARGUMENT = this.t3o_1;
            completeWith(this.p3o_1, ARGUMENT);
            return Unit_instance;
          case 4:
            throw this.ec_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.cc_1 === 4) {
          throw e_0;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(WorkerTask$runSuspend$slambda).j2m = function (completion) {
    return new WorkerTask$runSuspend$slambda(this.p3o_1, this.q3o_1, this.r3o_1, completion);
  };
  function WorkerTask$runSuspend$slambda_0($deferred, this$0, $block, resultContinuation) {
    var i = new WorkerTask$runSuspend$slambda($deferred, this$0, $block, resultContinuation);
    var l = function ($completion) {
      return i.s2p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function WorkerTask() {
    this.w3n_1 = null;
    this.x3n_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    tmp.y3n_1 = emptyList();
    this.z3n_1 = null;
    this.a3o_1 = false;
  }
  protoOf(WorkerTask).c3o = function (_set____db54di) {
    this.y3n_1 = _set____db54di;
  };
  protoOf(WorkerTask).d3o = function () {
    if (!this.a3o_1) {
      // Inline function 'kotlin.error' call
      var message = 'Must wrap function around runSuspend';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.y3n_1;
  };
  protoOf(WorkerTask).e3o = function (_set____db54di) {
    this.z3n_1 = _set____db54di;
  };
  protoOf(WorkerTask).f3o = function () {
    return this.z3n_1;
  };
  protoOf(WorkerTask).b3o = function (block) {
    this.a3o_1 = true;
    try {
      if (this.x3n_1) {
        this.w3n_1 = currentStackTrace();
        return Unit_instance;
      }
      var deferred = CompletableDeferred();
      var tmp = EmptyCoroutineContext_getInstance();
      launchImmediately(tmp, WorkerTask$runSuspend$slambda_0(deferred, this, block, null));
      this.z3n_1 = deferred;
    }finally {
      this.a3o_1 = false;
    }
  };
  protoOf(WorkerTask).v3n = function () {
    return Unit_instance;
  };
  protoOf(WorkerTask).g3o = function () {
    this.x3n_1 = true;
    try {
      this.v3n();
      return ensureNotNull(this.w3n_1);
    }finally {
      this.x3n_1 = false;
    }
  };
  function _WorkerImpl() {
  }
  protoOf(_WorkerImpl).w3o = function () {
    return Unit_instance;
  };
  protoOf(_WorkerImpl).x3o = function () {
    return false;
  };
  function Companion_25() {
  }
  var Companion_instance_31;
  function Companion_getInstance_32() {
    return Companion_instance_31;
  }
  var properties_initialized_Worker_kt_gr88g0;
  function _init_properties_Worker_kt__eidt7m() {
    if (!properties_initialized_Worker_kt_gr88g0) {
      properties_initialized_Worker_kt_gr88g0 = true;
      DEBUG_WORKER = Companion_instance_21.e15('DEBUG_WORKER') === 'true';
    }
  }
  function Companion_26() {
    Companion_instance_32 = this;
    this.y3o_1 = new Context(false, false);
    this.z3o_1 = new Context(true, true);
  }
  var Companion_instance_32;
  function Companion_getInstance_33() {
    if (Companion_instance_32 == null)
      new Companion_26();
    return Companion_instance_32;
  }
  function Context(optimizedNumericLists, useFastArrayList) {
    Companion_getInstance_33();
    useFastArrayList = useFastArrayList === VOID ? false : useFastArrayList;
    this.a3p_1 = optimizedNumericLists;
    this.b3p_1 = useFastArrayList;
  }
  protoOf(Context).c3p = function () {
    return this.b3p_1 ? FastArrayList_init_$Create$() : ArrayList_init_$Create$();
  };
  protoOf(Context).toString = function () {
    return 'Context(optimizedNumericLists=' + this.a3p_1 + ', useFastArrayList=' + this.b3p_1 + ')';
  };
  protoOf(Context).hashCode = function () {
    var result = getBooleanHashCode(this.a3p_1);
    result = imul(result, 31) + getBooleanHashCode(this.b3p_1) | 0;
    return result;
  };
  protoOf(Context).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Context))
      return false;
    var tmp0_other_with_cast = other instanceof Context ? other : THROW_CCE();
    if (!(this.a3p_1 === tmp0_other_with_cast.a3p_1))
      return false;
    if (!(this.b3p_1 === tmp0_other_with_cast.b3p_1))
      return false;
    return true;
  };
  function parseBooleanOrNull($this, s, context) {
    var tmp;
    if (s.e3n('true')) {
      tmp = true;
    } else if (s.e3n('false')) {
      tmp = false;
    } else if (s.e3n('null')) {
      tmp = null;
    } else if (s.e3n('undefined')) {
      tmp = null;
    } else {
      invalidJson$default($this);
    }
    return tmp;
  }
  function parseObject($this, s, context) {
    s.d3n(_Char___init__impl__6a9atx(123));
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.serialization.json.Json.parseObject.<anonymous>' call
    obj: while (true) {
      var tmp0_subject = s.o3m().v3m();
      if (tmp0_subject === _Char___init__impl__6a9atx(125))
        break obj;
      else if (tmp0_subject === _Char___init__impl__6a9atx(44))
        continue obj;
      else {
        s.t3m();
      }
      var tmp = Json_instance.d3p(s, context);
      var key = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
      s.o3m().d3n(_Char___init__impl__6a9atx(58));
      var value = Json_instance.d3p(s, context);
      // Inline function 'kotlin.collections.set' call
      this_0.x1(key, value);
    }
    return this_0;
  }
  function parseArray($this, s, context) {
    var out = null;
    var outNumber = null;
    s.d3n(_Char___init__impl__6a9atx(91));
    array: while (true) {
      var tmp0_subject = s.o3m().v3m();
      if (tmp0_subject === _Char___init__impl__6a9atx(93))
        break array;
      else if (tmp0_subject === _Char___init__impl__6a9atx(44))
        continue array;
      else {
        s.t3m();
      }
      var v = s.q3m();
      if ((out == null ? context.a3p_1 : false) ? (_Char___init__impl__6a9atx(48) <= v ? v <= _Char___init__impl__6a9atx(57) : false) ? true : v === _Char___init__impl__6a9atx(45) : false) {
        if (outNumber == null) {
          outNumber = new DoubleArrayList();
        }
        outNumber.ox(parseNumber($this, s));
      } else {
        if (out == null)
          out = context.c3p();
        if (!(outNumber == null)) {
          // Inline function 'korlibs.datastructure.iterators.fastForEach' call
          var this_0 = outNumber;
          var n = 0;
          while (n < this_0.l()) {
            // Inline function 'korlibs.io.serialization.json.Json.parseArray.<anonymous>' call
            var tmp0 = n;
            n = tmp0 + 1 | 0;
            var it = this_0.gx(tmp0);
            out.p(it);
          }
          outNumber = null;
        }
        out.p($this.d3p(s, context));
      }
    }
    var tmp1_elvis_lhs = outNumber;
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? out : tmp1_elvis_lhs;
    return tmp2_elvis_lhs == null ? context.c3p() : tmp2_elvis_lhs;
  }
  function parseNumber($this, s) {
    var start = s.d37_1;
    // Inline function 'korlibs.io.util.BaseStrReader.skipWhile' call
    $l$loop: while (true) {
      var tmp;
      if (s.r3m()) {
        // Inline function 'korlibs.io.serialization.json.Json.parseNumber.<anonymous>' call
        var it = s.q3m();
        tmp = (((((Char__compareTo_impl_ypi4mb(it, _Char___init__impl__6a9atx(48)) >= 0 ? Char__compareTo_impl_ypi4mb(it, _Char___init__impl__6a9atx(57)) <= 0 : false) ? true : it === _Char___init__impl__6a9atx(46)) ? true : it === _Char___init__impl__6a9atx(101)) ? true : it === _Char___init__impl__6a9atx(69)) ? true : it === _Char___init__impl__6a9atx(45)) ? true : it === _Char___init__impl__6a9atx(43);
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      s.u3m();
    }
    var end = s.d37_1;
    return NumberParser_instance.j3m(s.b37_1, start, end);
  }
  function invalidJson($this, msg) {
    throw new IOException(msg);
  }
  function invalidJson$default($this, msg, $super) {
    msg = msg === VOID ? 'Invalid JSON' : msg;
    return invalidJson($this, msg);
  }
  function Json() {
  }
  protoOf(Json).e3p = function (s, context) {
    return this.d3p(new StrReader(s), context);
  };
  protoOf(Json).d30 = function (s, context, $super) {
    context = context === VOID ? Companion_getInstance_33().y3o_1 : context;
    return $super === VOID ? this.e3p(s, context) : $super.e3p.call(this, s, context);
  };
  protoOf(Json).d3p = function (s, context) {
    var ic = s.o3m().q3m();
    var tmp;
    if (ic === _Char___init__impl__6a9atx(123)) {
      tmp = parseObject(this, s, context);
    } else if (ic === _Char___init__impl__6a9atx(91)) {
      tmp = parseArray(this, s, context);
    } else if (((((((((((ic === _Char___init__impl__6a9atx(45) ? true : ic === _Char___init__impl__6a9atx(43)) ? true : ic === _Char___init__impl__6a9atx(48)) ? true : ic === _Char___init__impl__6a9atx(49)) ? true : ic === _Char___init__impl__6a9atx(50)) ? true : ic === _Char___init__impl__6a9atx(51)) ? true : ic === _Char___init__impl__6a9atx(52)) ? true : ic === _Char___init__impl__6a9atx(53)) ? true : ic === _Char___init__impl__6a9atx(54)) ? true : ic === _Char___init__impl__6a9atx(55)) ? true : ic === _Char___init__impl__6a9atx(56)) ? true : ic === _Char___init__impl__6a9atx(57)) {
      var dres = parseNumber(this, s);
      tmp = numberToInt(dres) === dres ? numberToInt(dres) : dres;
    } else if (((ic === _Char___init__impl__6a9atx(116) ? true : ic === _Char___init__impl__6a9atx(102)) ? true : ic === _Char___init__impl__6a9atx(110)) ? true : ic === _Char___init__impl__6a9atx(117)) {
      tmp = parseBooleanOrNull(this, s, context);
    } else if (ic === _Char___init__impl__6a9atx(34)) {
      tmp = s.b3n();
    } else {
      invalidJson(this, "Not expected '" + toString_0(ic) + "'");
    }
    return tmp;
  };
  var Json_instance;
  function Json_getInstance() {
    return Json_instance;
  }
  function get_nativeSoundProvider() {
    _init_properties_HtmlNativeSoundProvider_kt__ocy1lg();
    // Inline function 'kotlin.getValue' call
    var this_0 = nativeSoundProvider$delegate;
    nativeSoundProvider$factory();
    return this_0.p3();
  }
  var nativeSoundProvider$delegate;
  function HtmlNativeSoundProvider() {
    NativeSoundProviderNew.call(this);
    HtmlSimpleSound_getInstance().k3p();
  }
  function nativeSoundProvider$delegate$lambda() {
    _init_properties_HtmlNativeSoundProvider_kt__ocy1lg();
    var tmp;
    if (Companion_instance_2.o1x()) {
      tmp = new HtmlNativeSoundProvider();
    } else {
      tmp = Companion_getInstance_10();
    }
    return tmp;
  }
  function nativeSoundProvider$factory() {
    return getPropertyCallableRef('nativeSoundProvider', 0, KProperty0, function () {
      return get_nativeSoundProvider();
    }, null);
  }
  var properties_initialized_HtmlNativeSoundProvider_kt_uyp32m;
  function _init_properties_HtmlNativeSoundProvider_kt__ocy1lg() {
    if (!properties_initialized_HtmlNativeSoundProvider_kt_uyp32m) {
      properties_initialized_HtmlNativeSoundProvider_kt_uyp32m = true;
      nativeSoundProvider$delegate = lazy(nativeSoundProvider$delegate$lambda);
    }
  }
  function HtmlSimpleSound$lambda$lambda($source) {
    return function () {
      $source.disconnect(0);
      HtmlSimpleSound_getInstance().h3p_1 = true;
      // Inline function 'korlibs.logger.Logger.info' call
      var this_0 = HtmlSimpleSound_getInstance().f3p_1;
      var level = Level_INFO_getInstance();
      var tmp;
      if (this_0.w17(level)) {
        // Inline function 'korlibs.audio.sound.HtmlSimpleSound.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = 'Web Audio was successfully unlocked';
        this_0.x17(level, tmp$ret$0);
        tmp = Unit_instance;
      }
      HtmlSimpleSound_getInstance().i3p_1.no(Unit_instance);
      return Unit_instance;
    };
  }
  function HtmlSimpleSound$lambda($unlock, $_scratchBuffer) {
    return function (it) {
      var tmp = document;
      var tmp_0;
      if ($unlock._v == null) {
        throwUninitializedPropertyAccessException('unlock');
      } else {
        tmp_0 = $unlock._v;
      }
      tmp.removeEventListener('keydown', tmp_0, true);
      var tmp_1 = document;
      var tmp_2;
      if ($unlock._v == null) {
        throwUninitializedPropertyAccessException('unlock');
      } else {
        tmp_2 = $unlock._v;
      }
      tmp_1.removeEventListener('touchstart', tmp_2, true);
      var tmp_3 = document;
      var tmp_4;
      if ($unlock._v == null) {
        throwUninitializedPropertyAccessException('unlock');
      } else {
        tmp_4 = $unlock._v;
      }
      tmp_3.removeEventListener('touchend', tmp_4, true);
      var tmp_5 = document;
      var tmp_6;
      if ($unlock._v == null) {
        throwUninitializedPropertyAccessException('unlock');
      } else {
        tmp_6 = $unlock._v;
      }
      tmp_5.removeEventListener('mousedown', tmp_6, true);
      var tmp_7;
      if (!(HtmlSimpleSound_getInstance().g3p_1 == null)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_safe_receiver = window.globalAudioContext;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.resume();
        }
        var source = HtmlSimpleSound_getInstance().g3p_1.createBufferSource();
        source.buffer = $_scratchBuffer;
        source.connect(HtmlSimpleSound_getInstance().g3p_1.destination);
        source.start(0.0);
        // Inline function 'kotlin.js.asDynamic' call
        if (typeof HtmlSimpleSound_getInstance().g3p_1.resume === 'function') {
          // Inline function 'kotlin.js.asDynamic' call
          HtmlSimpleSound_getInstance().g3p_1.resume();
        }
        source.onended = HtmlSimpleSound$lambda$lambda(source);
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function HtmlSimpleSound() {
    HtmlSimpleSound_instance = this;
    this.f3p_1 = Companion_getInstance_2().i17('HtmlSimpleSound');
    var tmp = this;
    var tmp_0;
    try {
      // Inline function 'kotlin.also' call
      var tmp_1;
      // Inline function 'kotlin.js.asDynamic' call
      if (!(typeof window.AudioContext === 'undefined')) {
        tmp_1 = new AudioContext();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        if (!(typeof window.webkitAudioContext === 'undefined')) {
          tmp_1 = new webkitAudioContext();
        } else {
          tmp_1 = null;
        }
      }
      var this_0 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.audio.sound.HtmlSimpleSound.ctx.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      window.globalAudioContext = this_0;
      tmp_0 = this_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'korlibs.logger.Logger.error' call
        var this_1 = this.f3p_1;
        var level = Level_ERROR_getInstance();
        var tmp_3;
        if (this_1.w17(level)) {
          // Inline function 'korlibs.audio.sound.HtmlSimpleSound.ctx.<anonymous>' call
          this_1.x17(level, e);
          tmp_3 = Unit_instance;
        }
        tmp_2 = null;
      } else {
        throw $p;
      }
      tmp_0 = tmp_2;
    }
    tmp.g3p_1 = tmp_0;
    this.h3p_1 = false;
    this.i3p_1 = CompletableDeferred(Job());
    var tmp_4 = this;
    var tmp_5 = this.i3p_1;
    tmp_4.j3p_1 = isInterface(tmp_5, Deferred) ? tmp_5 : THROW_CCE();
    var tmp0_safe_receiver = this.g3p_1;
    var _scratchBuffer = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.createBuffer(1, 1, 22050);
    var unlock = {_v: null};
    unlock._v = HtmlSimpleSound$lambda(unlock, _scratchBuffer);
    var tmp_6 = document;
    var tmp_7;
    if (unlock._v == null) {
      throwUninitializedPropertyAccessException('unlock');
    } else {
      tmp_7 = unlock._v;
    }
    tmp_6.addEventListener('keydown', tmp_7, true);
    var tmp_8 = document;
    var tmp_9;
    if (unlock._v == null) {
      throwUninitializedPropertyAccessException('unlock');
    } else {
      tmp_9 = unlock._v;
    }
    tmp_8.addEventListener('touchstart', tmp_9, true);
    var tmp_10 = document;
    var tmp_11;
    if (unlock._v == null) {
      throwUninitializedPropertyAccessException('unlock');
    } else {
      tmp_11 = unlock._v;
    }
    tmp_10.addEventListener('touchend', tmp_11, true);
    var tmp_12 = document;
    var tmp_13;
    if (unlock._v == null) {
      throwUninitializedPropertyAccessException('unlock');
    } else {
      tmp_13 = unlock._v;
    }
    tmp_12.addEventListener('mousedown', tmp_13, true);
  }
  protoOf(HtmlSimpleSound).k3p = function () {
  };
  var HtmlSimpleSound_instance;
  function HtmlSimpleSound_getInstance() {
    if (HtmlSimpleSound_instance == null)
      new HtmlSimpleSound();
    return HtmlSimpleSound_instance;
  }
  function HtmlCanvas() {
  }
  protoOf(HtmlCanvas).l3p = function (width, height) {
    if (Companion_instance_2.n1x()) {
      // Inline function 'kotlin.error' call
      var message = 'Canvas not available on Node.JS';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var out = document.createElement('canvas');
    out.width = width;
    out.height = height;
    return toLike(out);
  };
  var HtmlCanvas_instance;
  function HtmlCanvas_getInstance() {
    return HtmlCanvas_instance;
  }
  function toLike(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function toHtmlNative(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof HtmlNativeImage) {
      tmp = _this__u8e3s4;
    } else {
      tmp = HtmlNativeImage_init_$Create$_0(HtmlImage_instance.m3p(_this__u8e3s4.k26()));
    }
    return tmp;
  }
  function HtmlImage() {
  }
  protoOf(HtmlImage).n3p = function (width, height) {
    return HtmlCanvas_instance.l3p(width, height);
  };
  protoOf(HtmlImage).o3p = function (bmpData, bmpWidth, bmpHeight, canvas) {
    var pixelCount = _RgbaArray___get_size__impl__imxef8(bmpData);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var ctx = canvas.getContext('2d');
    var idata = ctx.createImageData(bmpWidth, bmpHeight);
    var idataData = idata.data;
    var m = 0;
    var inductionVariable = 0;
    if (inductionVariable < pixelCount)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = RgbaArray__get_impl_nzyo1o(bmpData, n);
        // Inline function 'org.khronos.webgl.set' call
        var tmp1 = m;
        m = tmp1 + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        idataData[tmp1] = _RGBA___get_r__impl__duz7mo(c);
        // Inline function 'org.khronos.webgl.set' call
        var tmp2 = m;
        m = tmp2 + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        idataData[tmp2] = _RGBA___get_g__impl__o8pukr(c);
        // Inline function 'org.khronos.webgl.set' call
        var tmp3 = m;
        m = tmp3 + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        idataData[tmp3] = _RGBA___get_b__impl__m6tl80(c);
        // Inline function 'org.khronos.webgl.set' call
        var tmp4 = m;
        m = tmp4 + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        idataData[tmp4] = _RGBA___get_a__impl__6msvu7(c);
      }
       while (inductionVariable < pixelCount);
    ctx.putImageData(idata, 0.0, 0.0);
    return canvas;
  };
  protoOf(HtmlImage).p3p = function (bmp, canvas) {
    return this.o3p(_RgbaArray___init__impl__oib4y4(bmp.c28().y26_1), bmp.f1z_1, bmp.g1z_1, canvas);
  };
  protoOf(HtmlImage).m3p = function (bmp) {
    return this.p3p(bmp, this.n3p(bmp.f1z_1, bmp.g1z_1));
  };
  var HtmlImage_instance;
  function HtmlImage_getInstance() {
    return HtmlImage_instance;
  }
  function get_nativeImageFormatProvider() {
    _init_properties_NativeImageFormatProviderJs_kt__3qg4wz();
    return nativeImageFormatProvider;
  }
  var nativeImageFormatProvider;
  function get_tempB() {
    _init_properties_NativeImageFormatProviderJs_kt__3qg4wz();
    return tempB;
  }
  var tempB;
  function get_tempI() {
    _init_properties_NativeImageFormatProviderJs_kt__3qg4wz();
    return tempI;
  }
  var tempI;
  function get_temp8() {
    _init_properties_NativeImageFormatProviderJs_kt__3qg4wz();
    return temp8;
  }
  var temp8;
  function get_isLittleEndian() {
    _init_properties_NativeImageFormatProviderJs_kt__3qg4wz();
    // Inline function 'kotlin.getValue' call
    var this_0 = isLittleEndian$delegate;
    isLittleEndian$factory();
    return this_0.p3();
  }
  var isLittleEndian$delegate;
  function NodeJsNativeImageFormatProvider() {
    NodeJsNativeImageFormatProvider_instance = this;
    BaseNativeImageFormatProvider.call(this);
  }
  protoOf(NodeJsNativeImageFormatProvider).t2f = function () {
    return get_RegisteredImageFormats();
  };
  var NodeJsNativeImageFormatProvider_instance;
  function NodeJsNativeImageFormatProvider_getInstance() {
    if (NodeJsNativeImageFormatProvider_instance == null)
      new NodeJsNativeImageFormatProvider();
    return NodeJsNativeImageFormatProvider_instance;
  }
  function $decodeInternalCOROUTINE$279(_this__u8e3s4, data, props, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y3p_1 = _this__u8e3s4;
    this.z3p_1 = data;
    this.a3q_1 = props;
  }
  protoOf($decodeInternalCOROUTINE$279).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = BrowserImage_instance.b3q(this.z3p_1, this.a3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = HtmlNativeImage_init_$Create$_0(ARGUMENT);
            return new NativeImageResult(ARGUMENT_0);
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $decodeInternalCOROUTINE$280(_this__u8e3s4, vfs, path, props, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k3q_1 = _this__u8e3s4;
    this.l3q_1 = vfs;
    this.m3q_1 = path;
    this.n3q_1 = props;
  }
  protoOf($decodeInternalCOROUTINE$280).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 6;
            this.o3q_1 = this.l3q_1;
            var tmp_0 = this.o3q_1;
            if (tmp_0 instanceof LocalVfs) {
              this.bc_1 = 4;
              suspendResult = BrowserImage_instance.t3q(this.m3q_1, this.n3q_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.o3q_1;
              if (tmp_1 instanceof UrlVfs_0) {
                this.q3q_1 = this.l3q_1.i34(this.m3q_1);
                this.bc_1 = 3;
                suspendResult = BrowserImage_instance.t3q(this.q3q_1, this.n3q_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.r3q_1 = BrowserImage_instance;
                this.bc_1 = 1;
                suspendResult = this.l3q_1.e15(this.m3q_1).z2v(this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

          case 1:
            this.s3q_1 = suspendResult;
            this.bc_1 = 2;
            suspendResult = this.r3q_1.b3q(this.s3q_1, this.n3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.p3q_1 = HtmlNativeImage_init_$Create$_0(ARGUMENT);
            this.bc_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.p3q_1 = HtmlNativeImage_init_$Create$(ARGUMENT_0);
            this.bc_1 = 5;
            continue $sm;
          case 4:
            var ARGUMENT_1 = suspendResult;
            this.p3q_1 = HtmlNativeImage_init_$Create$(ARGUMENT_1);
            this.bc_1 = 5;
            continue $sm;
          case 5:
            var ARGUMENT_2 = this.p3q_1;
            return new NativeImageResult(ARGUMENT_2);
          case 6:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 6) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function HtmlNativeImageFormatProvider() {
    HtmlNativeImageFormatProvider_instance = this;
    NativeImageFormatProvider.call(this);
  }
  protoOf(HtmlNativeImageFormatProvider).v2h = function (data, props, $completion) {
    var tmp = new $decodeInternalCOROUTINE$279(this, data, props, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(HtmlNativeImageFormatProvider).y2h = function (vfs, path, props, $completion) {
    var tmp = new $decodeInternalCOROUTINE$280(this, vfs, path, props, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(HtmlNativeImageFormatProvider).j29 = function (width, height, premultiplied) {
    return HtmlNativeImage_init_$Create$_0(HtmlCanvas_instance.l3p(width, height));
  };
  var HtmlNativeImageFormatProvider_instance;
  function HtmlNativeImageFormatProvider_getInstance() {
    if (HtmlNativeImageFormatProvider_instance == null)
      new HtmlNativeImageFormatProvider();
    return HtmlNativeImageFormatProvider_instance;
  }
  function HtmlNativeImage_init_$Init$(img, $this) {
    HtmlNativeImage.call($this, img, img.width, img.height);
    return $this;
  }
  function HtmlNativeImage_init_$Create$(img) {
    return HtmlNativeImage_init_$Init$(img, objectCreate(protoOf(HtmlNativeImage)));
  }
  function HtmlNativeImage_init_$Init$_0(canvas, $this) {
    HtmlNativeImage.call($this, canvas, canvas.width, canvas.height);
    return $this;
  }
  function HtmlNativeImage_init_$Create$_0(canvas) {
    return HtmlNativeImage_init_$Init$_0(canvas, objectCreate(protoOf(HtmlNativeImage)));
  }
  function HtmlNativeImage$lazyCanvasElement$delegate$lambda(this$0, $width, $height) {
    return function () {
      // Inline function 'kotlin.also' call
      var tmp;
      // Inline function 'kotlin.js.asDynamic' call
      if (this$0.j3r_1.src !== undefined) {
        var tmp_0 = BrowserImage_instance;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = this$0.j3r_1;
        tmp = tmp_0.n3r(tmp$ret$2, $width, $height);
      } else {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = this$0.j3r_1;
      }
      var this_0 = tmp;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.image.format.HtmlNativeImage.lazyCanvasElement$delegate.<anonymous>.<anonymous>' call
      this$0.j3r_1 = this_0;
      return this_0;
    };
  }
  function HtmlNativeImage$ctx$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.o3r().getContext('2d');
    };
  }
  function HtmlNativeImage(texSourceBase, width, height) {
    NativeImage.call(this, width, height, texSourceBase, true);
    this.i3r_1 = texSourceBase;
    this.j3r_1 = this.i3r_1;
    var tmp = this;
    tmp.k3r_1 = lazy(HtmlNativeImage$lazyCanvasElement$delegate$lambda(this, width, height));
    var tmp_0 = this;
    tmp_0.l3r_1 = lazy(HtmlNativeImage$ctx$delegate$lambda(this));
    var tmp_1 = this;
    // Inline function 'korlibs.time.milliseconds' call
    tmp_1.m3r_1 = toDuration(0.0, DurationUnit_MILLISECONDS_getInstance());
  }
  protoOf(HtmlNativeImage).fb = function () {
    return 'HtmlNativeImage';
  };
  protoOf(HtmlNativeImage).o3r = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.k3r_1;
    lazyCanvasElement$factory();
    return this_0.p3();
  };
  protoOf(HtmlNativeImage).p3r = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.l3r_1;
    ctx$factory();
    return this_0.p3();
  };
  protoOf(HtmlNativeImage).y1z = function (x, y, width, height, out, offset) {
    if (width <= 0 ? true : height <= 0)
      return Unit_instance;
    var size = imul(width, height);
    var tmp = this.i3r_1;
    if (tmp instanceof HTMLVideoElement) {
      var now = PerformanceCounter_instance.hi();
      var elapsedTime = Duration__minus_impl_q5cfm7(now, this.m3r_1);
      // Inline function 'korlibs.time.milliseconds' call
      // Inline function 'kotlin.time.Companion.milliseconds' call
      Companion_getInstance_5();
      var tmp$ret$1 = toDuration(16, DurationUnit_MILLISECONDS_getInstance());
      if (Duration__compareTo_impl_pchp0f(elapsedTime, tmp$ret$1) >= 0) {
        this.m3r_1 = now;
        this.p3r().clearRect(0.0, 0.0, width, height);
        this.p3r().drawImage(this.i3r_1, 0.0, 0.0);
      }
    }
    var idata = this.p3r().getImageData(x, y, width, height);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var data = asInt32Array(idata.data.buffer);
    arraycopy(data, 0, out, offset, size);
    if (get_isBigEndian()) {
      bswap32(out, offset, size);
    }
    if (!this.n1z_1) {
      premultiply(_RgbaArray___init__impl__oib4y4(out), offset, _RgbaPremultipliedArray___init__impl__lx83hy(out), offset, imul(width, height));
    }
  };
  protoOf(HtmlNativeImage).a20 = function (x, y, width, height, out, offset) {
    if (width <= 0 ? true : height <= 0)
      return Unit_instance;
    var size = imul(width, height);
    var idata = this.p3r().createImageData(width, height);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var data = asInt32Array(idata.data.buffer);
    arraycopy(out, offset, data, 0, size);
    if (!this.n1z_1) {
      depremultiply(_RgbaPremultipliedArray___init__impl__lx83hy(data), 0, _RgbaArray___init__impl__oib4y4(data), 0, imul(width, height));
    }
    if (get_isBigEndian()) {
      bswap32(data, 0, size);
    }
    this.p3r().putImageData(idata, x, y);
  };
  protoOf(HtmlNativeImage).q3r = function (type, quality) {
    return this.o3r().toDataURL(type, quality);
  };
  protoOf(HtmlNativeImage).r3r = function (type, quality, $super) {
    type = type === VOID ? 'image/png' : type;
    quality = quality === VOID ? null : quality;
    return $super === VOID ? this.q3r(type, quality) : $super.q3r.call(this, type, quality);
  };
  function BrowserImage$loadImage$lambda($c, $img) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $c;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.Companion.success' call
      var value = $img;
      var tmp$ret$2 = _Result___init__impl__xyqfz8(value);
      this_0.d6(tmp$ret$2);
      return Unit_instance;
    };
  }
  function BrowserImage$loadImage$lambda_0($c, $jsUrl) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi, _anonymous_parameter_3__qggqen, _anonymous_parameter_4__qggqds) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $c;
      // Inline function 'kotlin.Companion.failure' call
      var exception = RuntimeException_init_$Create$('error loading image ' + $jsUrl);
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      this_0.d6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $decodeToCanvasCOROUTINE$281(_this__u8e3s4, bytes, props, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3s_1 = _this__u8e3s4;
    this.b3s_1 = bytes;
    this.c3s_1 = props;
  }
  protoOf($decodeToCanvasCOROUTINE$281).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 7;
            if (Companion_instance_2.n1x()) {
              var message = 'Canvas not available on NodeJS';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp_0 = this;
            var this_0 = [this.b3s_1];
            var type = 'image/png';
            var o = {};
            o['type'] = type;
            tmp_0.d3s_1 = new Blob(this_0, o);
            this.e3s_1 = URL.createObjectURL(this.d3s_1);
            this.bc_1 = 1;
            continue $sm;
          case 1:
            this.bc_1 = 2;
            continue $sm;
          case 2:
            this.cc_1 = 6;
            this.bc_1 = 3;
            suspendResult = this.a3s_1.g3s(this.e3s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.f3s_1 = suspendResult;
            this.cc_1 = 7;
            this.bc_1 = 4;
            var tmp_1 = this;
            continue $sm;
          case 4:
            var tmp_2 = this.f3s_1;
            this.cc_1 = 7;
            URL.revokeObjectURL(this.e3s_1);
            return tmp_2;
          case 5:
            this.cc_1 = 7;
            URL.revokeObjectURL(this.e3s_1);
            return Unit_instance;
          case 6:
            this.cc_1 = 7;
            var t = this.ec_1;
            URL.revokeObjectURL(this.e3s_1);
            throw t;
          case 7:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 7) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $loadCanvasCOROUTINE$282(_this__u8e3s4, jsUrl, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p3s_1 = _this__u8e3s4;
    this.q3s_1 = jsUrl;
  }
  protoOf($loadCanvasCOROUTINE$282).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = this.p3s_1.r3s(this.q3s_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.p3s_1.s3s(ARGUMENT);
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function BrowserImage() {
  }
  protoOf(BrowserImage).b3q = function (bytes, props, $completion) {
    var tmp = new $decodeToCanvasCOROUTINE$281(this, bytes, props, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(BrowserImage).s3s = function (img) {
    return this.n3r(img, img.width, img.height);
  };
  protoOf(BrowserImage).n3r = function (img, width, height) {
    var canvas = HtmlCanvas_instance.l3p(width, height);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var ctx = canvas.getContext('2d');
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    ctx.drawImage(img, 0.0, 0.0);
    return canvas;
  };
  protoOf(BrowserImage).t3q = function (jsUrl, props, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.wn();
    // Inline function 'korlibs.image.format.BrowserImage.loadImage.<anonymous>' call
    if (Companion_instance_2.n1x()) {
      // Inline function 'kotlin.error' call
      var message = 'Canvas not available on NodeJS';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var img = document.createElement('img');
    img.onload = BrowserImage$loadImage$lambda(cancellable, img);
    img.onerror = BrowserImage$loadImage$lambda_0(cancellable, jsUrl);
    img.src = jsUrl;
    return cancellable.il();
  };
  protoOf(BrowserImage).r3s = function (jsUrl, props, $completion, $super) {
    props = props === VOID ? Companion_getInstance_15().k2c_1 : props;
    return $super === VOID ? this.t3q(jsUrl, props, $completion) : $super.t3q.call(this, jsUrl, props, $completion);
  };
  protoOf(BrowserImage).g3s = function (jsUrl, $completion) {
    var tmp = new $loadCanvasCOROUTINE$282(this, jsUrl, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  var BrowserImage_instance;
  function BrowserImage_getInstance() {
    return BrowserImage_instance;
  }
  function get_isBigEndian() {
    _init_properties_NativeImageFormatProviderJs_kt__3qg4wz();
    return !get_isLittleEndian();
  }
  function bswap32(v, offset, size) {
    _init_properties_NativeImageFormatProviderJs_kt__3qg4wz();
    var inductionVariable = offset;
    var last = offset + size | 0;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        v[n] = bswap32_0(v[n]);
      }
       while (inductionVariable < last);
  }
  function bswap32_0(v) {
    _init_properties_NativeImageFormatProviderJs_kt__3qg4wz();
    return (v >>> 24 | 0 | v << 24 | (v & 65280) << 8 | (v >>> 8 | 0)) & 65280;
  }
  function isLittleEndian$delegate$lambda() {
    _init_properties_NativeImageFormatProviderJs_kt__3qg4wz();
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    get_tempI()[0] = 1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return get_temp8()[0] === 1;
  }
  function isLittleEndian$factory() {
    return getPropertyCallableRef('isLittleEndian', 0, KProperty0, function () {
      return get_isLittleEndian();
    }, null);
  }
  function lazyCanvasElement$factory() {
    return getPropertyCallableRef('lazyCanvasElement', 1, KProperty1, function (receiver) {
      return receiver.o3r();
    }, null);
  }
  function ctx$factory() {
    return getPropertyCallableRef('ctx', 1, KProperty1, function (receiver) {
      return receiver.p3r();
    }, null);
  }
  var properties_initialized_NativeImageFormatProviderJs_kt_7b9n17;
  function _init_properties_NativeImageFormatProviderJs_kt__3qg4wz() {
    if (!properties_initialized_NativeImageFormatProviderJs_kt_7b9n17) {
      properties_initialized_NativeImageFormatProviderJs_kt_7b9n17 = true;
      nativeImageFormatProvider = Companion_instance_2.n1x() ? NodeJsNativeImageFormatProvider_getInstance() : HtmlNativeImageFormatProvider_getInstance();
      tempB = new ArrayBuffer(4);
      tempI = new Int32Array(get_tempB());
      temp8 = new Uint8Array(get_tempB());
      isLittleEndian$delegate = lazy(isLittleEndian$delegate$lambda);
    }
  }
  function get_jsGlobalDynamic() {
    _init_properties_KorioNativeJs_kt__151su();
    return jsGlobalDynamic;
  }
  var jsGlobalDynamic;
  function get_jsGlobal() {
    _init_properties_KorioNativeJs_kt__151su();
    return jsGlobal;
  }
  var jsGlobal;
  function get_isDenoJs() {
    _init_properties_KorioNativeJs_kt__151su();
    // Inline function 'kotlin.getValue' call
    var this_0 = isDenoJs$delegate;
    isDenoJs$factory();
    return this_0.p3();
  }
  var isDenoJs$delegate;
  function get_isWeb() {
    _init_properties_KorioNativeJs_kt__151su();
    // Inline function 'kotlin.getValue' call
    var this_0 = isWeb$delegate;
    isWeb$factory();
    return this_0.p3();
  }
  var isWeb$delegate;
  function get_isWorker() {
    _init_properties_KorioNativeJs_kt__151su();
    // Inline function 'kotlin.getValue' call
    var this_0 = isWorker$delegate;
    isWorker$factory();
    return this_0.p3();
  }
  var isWorker$delegate;
  function get_isNodeJs() {
    _init_properties_KorioNativeJs_kt__151su();
    // Inline function 'kotlin.getValue' call
    var this_0 = isNodeJs$delegate;
    isNodeJs$factory();
    return this_0.p3();
  }
  var isNodeJs$delegate;
  function get_jsRuntime() {
    _init_properties_KorioNativeJs_kt__151su();
    // Inline function 'kotlin.getValue' call
    var this_0 = jsRuntime$delegate;
    jsRuntime$factory();
    return this_0.p3();
  }
  var jsRuntime$delegate;
  function jsObject(pairs) {
    _init_properties_KorioNativeJs_kt__151su();
    var out = jsEmptyObj();
    var inductionVariable = 0;
    var last = pairs.length;
    while (inductionVariable < last) {
      var pair = pairs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      out[pair.pe_1] = pair.qe_1;
    }
    return out;
  }
  function jsEmptyObj() {
    _init_properties_KorioNativeJs_kt__151su();
    return {};
  }
  function get_isShell() {
    _init_properties_KorioNativeJs_kt__151su();
    return (!get_isWeb() ? !get_isNodeJs() : false) ? !get_isWorker() : false;
  }
  function jsObjectToMap(obj) {
    _init_properties_KorioNativeJs_kt__151su();
    // Inline function 'kotlin.collections.associate' call
    var this_0 = jsObjectKeysArray(obj);
    var capacity = coerceAtLeast(mapCapacity(this_0.length), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var element = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'korlibs.io.jsObjectToMap.<anonymous>' call
      var pair = to(element, obj[element]);
      destination.x1(pair.pe_1, pair.qe_1);
    }
    return destination;
  }
  function jsEmptyArray() {
    _init_properties_KorioNativeJs_kt__151su();
    return [];
  }
  function jsToObjectMap(obj) {
    _init_properties_KorioNativeJs_kt__151su();
    if (obj == null)
      return null;
    // Inline function 'kotlin.collections.linkedMapOf' call
    var out = LinkedHashMap_init_$Create$();
    var keys = jsObjectKeys(obj);
    var inductionVariable = 0;
    var last = keys.length;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var key = keys[n];
        // Inline function 'kotlin.collections.set' call
        var key_0 = '' + key;
        var value = obj[key];
        out.x1(key_0, value);
      }
       while (inductionVariable < last);
    return out;
  }
  function jsToArray(obj) {
    _init_properties_KorioNativeJs_kt__151su();
    var tmp = 0;
    var tmp_0 = obj.length;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = obj[tmp_2];
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function jsNew(clazz) {
    _init_properties_KorioNativeJs_kt__151su();
    return (new clazz())();
  }
  function jsObjectKeysArray(obj) {
    _init_properties_KorioNativeJs_kt__151su();
    var tmp = jsToArray(jsObjectKeys(obj));
    return isArray(tmp) ? tmp : THROW_CCE();
  }
  function jsObjectKeys(obj) {
    _init_properties_KorioNativeJs_kt__151su();
    return Object.keys(obj);
  }
  function isDenoJs$delegate$lambda() {
    _init_properties_KorioNativeJs_kt__151su();
    // Inline function 'kotlin.js.unsafeCast' call
    return typeof Deno === 'object' && Deno.statSync;
  }
  function isWeb$delegate$lambda() {
    _init_properties_KorioNativeJs_kt__151su();
    // Inline function 'kotlin.js.unsafeCast' call
    return typeof window === 'object';
  }
  function isWorker$delegate$lambda() {
    _init_properties_KorioNativeJs_kt__151su();
    // Inline function 'kotlin.js.unsafeCast' call
    return typeof importScripts === 'function';
  }
  function isNodeJs$delegate$lambda() {
    _init_properties_KorioNativeJs_kt__151su();
    // Inline function 'kotlin.js.unsafeCast' call
    return typeof process !== 'undefined' && process.release && process.release.name.search(/node|io.js/) !== -1;
  }
  function jsRuntime$delegate$lambda() {
    _init_properties_KorioNativeJs_kt__151su();
    return get_isDenoJs() ? JsRuntimeDeno_getInstance() : get_isNodeJs() ? JsRuntimeNode_getInstance() : JsRuntimeBrowser_getInstance();
  }
  function isDenoJs$factory() {
    return getPropertyCallableRef('isDenoJs', 0, KProperty0, function () {
      return get_isDenoJs();
    }, null);
  }
  function isWeb$factory() {
    return getPropertyCallableRef('isWeb', 0, KProperty0, function () {
      return get_isWeb();
    }, null);
  }
  function isWorker$factory() {
    return getPropertyCallableRef('isWorker', 0, KProperty0, function () {
      return get_isWorker();
    }, null);
  }
  function isNodeJs$factory() {
    return getPropertyCallableRef('isNodeJs', 0, KProperty0, function () {
      return get_isNodeJs();
    }, null);
  }
  function jsRuntime$factory() {
    return getPropertyCallableRef('jsRuntime', 0, KProperty0, function () {
      return get_jsRuntime();
    }, null);
  }
  var properties_initialized_KorioNativeJs_kt_y4p8os;
  function _init_properties_KorioNativeJs_kt__151su() {
    if (!properties_initialized_KorioNativeJs_kt_y4p8os) {
      properties_initialized_KorioNativeJs_kt_y4p8os = true;
      jsGlobalDynamic = typeof globalThis !== 'undefined' ? globalThis : typeof global !== 'undefined' ? global : self;
      jsGlobal = get_jsGlobalDynamic();
      isDenoJs$delegate = lazy(isDenoJs$delegate$lambda);
      isWeb$delegate = lazy(isWeb$delegate$lambda);
      isWorker$delegate = lazy(isWorker$delegate$lambda);
      isNodeJs$delegate = lazy(isNodeJs$delegate$lambda);
      jsRuntime$delegate = lazy(jsRuntime$delegate$lambda);
    }
  }
  function korAtomic(initial) {
    return new KorAtomicLong(initial, true);
  }
  function korAtomic_0(initial) {
    return new KorAtomicRef(initial, true);
  }
  function korAtomic_1(initial) {
    return new KorAtomicInt(initial, true);
  }
  function DynamicInternal() {
  }
  protoOf(DynamicInternal).c2p = function () {
    return get_jsGlobalDynamic();
  };
  protoOf(DynamicInternal).e2p = function (instance, key) {
    // Inline function 'kotlin.js.asDynamic' call
    return instance[key];
  };
  protoOf(DynamicInternal).d2p = function (instance, key, value) {
    // Inline function 'kotlin.js.asDynamic' call
    instance[key] = value;
  };
  var DynamicInternal_instance;
  function DynamicInternal_getInstance() {
    return DynamicInternal_instance;
  }
  function toVfs(_this__u8e3s4) {
    var file = _this__u8e3s4;
    return (new toVfs$1(file)).e15(file.name);
  }
  function openAsync_0(_this__u8e3s4) {
    return buffered(toAsyncStream(new BlobAsyncBaseStream(_this__u8e3s4)), 65536, 16);
  }
  function BlobAsyncBaseStream$read$lambda($reader, $len, $buffer, $offset, $deferred) {
    return function (it) {
      // Inline function 'kotlin.js.unsafeCast' call
      var ab = $reader.result;
      // Inline function 'kotlin.math.min' call
      var a = ab.byteLength;
      var b = $len;
      var minLen = Math.min(a, b);
      arraycopy_0(toByteArray(new Int8Array(ab)), 0, $buffer, $offset, minLen);
      return $deferred.no(minLen);
    };
  }
  function BlobAsyncBaseStream$read$lambda_0($deferred, $reader) {
    return function (it) {
      return $deferred.mo(newThrowable('' + $reader.error));
    };
  }
  function BlobAsyncBaseStream(blob) {
    AsyncStreamBase.call(this);
    this.t3s_1 = blob;
  }
  protoOf(BlobAsyncBaseStream).g2t = function ($completion) {
    return Unit_instance;
  };
  protoOf(BlobAsyncBaseStream).e2x = function (position, buffer, offset, len, $completion) {
    var deferred = CompletableDeferred();
    var reader = new FileReader();
    reader.onload = BlobAsyncBaseStream$read$lambda(reader, len, buffer, offset, deferred);
    reader.onerror = BlobAsyncBaseStream$read$lambda_0(deferred, reader);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.t3s_1;
    reader.readAsArrayBuffer(tmp$ret$1.slice(position.h6(), position.h6() + len));
    return deferred.am($completion);
  };
  protoOf(BlobAsyncBaseStream).q2w = function ($completion) {
    return numberToLong(this.t3s_1.size);
  };
  function toVfs$1($file) {
    this.v3s_1 = $file;
    Vfs.call(this);
    this.u3s_1 = $file.name;
  }
  protoOf(toVfs$1).d2t = function () {
    return this.u3s_1;
  };
  protoOf(toVfs$1).a2t = function (path, mode, $completion) {
    return openAsync_0(this.v3s_1);
  };
  var File_separatorChar;
  function get_standardVfs() {
    _init_properties_LocalVfsJs_kt__kywvdr();
    return standardVfs;
  }
  var standardVfs;
  function get_applicationVfs() {
    _init_properties_LocalVfsJs_kt__kywvdr();
    // Inline function 'kotlin.getValue' call
    var this_0 = applicationVfs$delegate;
    applicationVfs$factory();
    return this_0.p3();
  }
  var applicationVfs$delegate;
  var applicationDataVfsOrNull;
  var cacheVfsOrNull;
  var externalStorageVfs$delegate;
  var userHomeVfs$delegate;
  var tempVfsOrNull;
  function localVfs(path, async) {
    async = async === VOID ? true : async;
    _init_properties_LocalVfsJs_kt__kywvdr();
    return get_jsRuntime().a3t(path);
  }
  function standardVfs$o$resourcesVfs$delegate$lambda() {
    return get_applicationVfs().c2w();
  }
  function standardVfs$o$rootLocalVfs$delegate$lambda() {
    return localVfs('.');
  }
  function standardVfs$1() {
    StandardVfs.call(this);
    var tmp = this;
    tmp.b3t_1 = lazy(standardVfs$o$resourcesVfs$delegate$lambda);
    var tmp_0 = this;
    tmp_0.c3t_1 = lazy(standardVfs$o$rootLocalVfs$delegate$lambda);
  }
  protoOf(standardVfs$1).i30 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.b3t_1;
    resourcesVfs$factory();
    return this_0.p3();
  };
  function applicationVfs$delegate$lambda() {
    _init_properties_LocalVfsJs_kt__kywvdr();
    return localVfs('.');
  }
  function externalStorageVfs$delegate$lambda() {
    _init_properties_LocalVfsJs_kt__kywvdr();
    return localVfs('.');
  }
  function userHomeVfs$delegate$lambda() {
    _init_properties_LocalVfsJs_kt__kywvdr();
    return localVfs('.');
  }
  function applicationVfs$factory() {
    return getPropertyCallableRef('applicationVfs', 0, KProperty0, function () {
      return get_applicationVfs();
    }, null);
  }
  function resourcesVfs$factory() {
    return getPropertyCallableRef('resourcesVfs', 1, KProperty1, function (receiver) {
      return receiver.i30();
    }, null);
  }
  var properties_initialized_LocalVfsJs_kt_51m659;
  function _init_properties_LocalVfsJs_kt__kywvdr() {
    if (!properties_initialized_LocalVfsJs_kt_51m659) {
      properties_initialized_LocalVfsJs_kt_51m659 = true;
      standardVfs = new standardVfs$1();
      applicationVfs$delegate = lazy(applicationVfs$delegate$lambda);
      applicationDataVfsOrNull = null;
      cacheVfsOrNull = null;
      externalStorageVfs$delegate = lazy(externalStorageVfs$delegate$lambda);
      userHomeVfs$delegate = lazy(userHomeVfs$delegate$lambda);
      tempVfsOrNull = null;
    }
  }
  function StandardPaths() {
  }
  var StandardPaths_instance;
  function StandardPaths_getInstance() {
    return StandardPaths_instance;
  }
  function get_portableSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.i6();
    return tmp0_elvis_lhs == null ? 'unknown' : tmp0_elvis_lhs;
  }
  function EnvironmentInternal() {
  }
  protoOf(EnvironmentInternal).e15 = function (key) {
    return get_jsRuntime().d3t(key);
  };
  var EnvironmentInternal_instance;
  function EnvironmentInternal_getInstance() {
    return EnvironmentInternal_instance;
  }
  function FileNotFoundException(msg) {
    IOException.call(this, msg);
    captureStack(this, FileNotFoundException);
  }
  function IOException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, IOException);
  }
  function EOFException(msg) {
    IOException.call(this, msg);
    captureStack(this, EOFException);
  }
  function get_UTF8() {
    _init_properties_UTF8_kt__b4hq3z();
    return UTF8;
  }
  var UTF8;
  var JS_UTF8;
  function JS_UTF8$1() {
    UTC8CharsetBase.call(this, 'UTF-8');
    var tmp = this;
    var tmp_0;
    try {
      tmp_0 = new TextDecoder('utf-8');
    } catch ($p) {
      var tmp_1;
      var e = $p;
      tmp_1 = null;
      tmp_0 = tmp_1;
    }
    tmp.f3t_1 = tmp_0;
    var tmp_2 = this;
    var tmp_3;
    try {
      tmp_3 = new TextEncoder('utf-8');
    } catch ($p) {
      var tmp_4;
      var e_0 = $p;
      tmp_4 = null;
      tmp_3 = tmp_4;
    }
    tmp_2.g3t_1 = tmp_3;
  }
  protoOf(JS_UTF8$1).g36 = function (out, src, start, end) {
    if (!(this.f3t_1 == null)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var srcBuffer = src;
      out.f5(this.f3t_1.decode(new Int8Array(srcBuffer.buffer, start, end - start | 0)));
    } else {
      protoOf(UTC8CharsetBase).g36.call(this, out, src, start, end);
    }
    return end - start | 0;
  };
  var properties_initialized_UTF8_kt_emb36b;
  function _init_properties_UTF8_kt__b4hq3z() {
    if (!properties_initialized_UTF8_kt_emb36b) {
      properties_initialized_UTF8_kt_emb36b = true;
      UTF8 = new UTC8CharsetBase('UTF-8');
      JS_UTF8 = new JS_UTF8$1();
    }
  }
  function get_httpFactory() {
    _init_properties_HttpFactoryJs_kt__a3ro2v();
    // Inline function 'kotlin.getValue' call
    var this_0 = httpFactory$delegate;
    httpFactory$factory();
    return this_0.p3();
  }
  var httpFactory$delegate;
  function httpFactory$delegate$lambda() {
    _init_properties_HttpFactoryJs_kt__a3ro2v();
    return new httpFactory$2$1();
  }
  function httpFactory$2$1() {
  }
  protoOf(httpFactory$2$1).h3c = function () {
    return get_jsRuntime().h3t();
  };
  function httpFactory$factory() {
    return getPropertyCallableRef('httpFactory', 0, KProperty0, function () {
      return get_httpFactory();
    }, null);
  }
  var properties_initialized_HttpFactoryJs_kt_on1x9h;
  function _init_properties_HttpFactoryJs_kt__a3ro2v() {
    if (!properties_initialized_HttpFactoryJs_kt_on1x9h) {
      properties_initialized_HttpFactoryJs_kt_on1x9h = true;
      httpFactory$delegate = lazy(httpFactory$delegate$lambda);
    }
  }
  function Companion_27() {
    Companion_instance_33 = this;
    this.i3t_1 = Companion_getInstance_2().i17('JsRuntime');
  }
  var Companion_instance_33;
  function Companion_getInstance_34() {
    if (Companion_instance_33 == null)
      new Companion_27();
    return Companion_instance_33;
  }
  function _get__envs__kxwcr8($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.y3s_1;
    _envs$factory();
    return this_0.p3();
  }
  function _get__envsUC__n5sgyq($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.z3s_1;
    _envsUC$factory();
    return this_0.p3();
  }
  function JsRuntime$_envs$delegate$lambda(this$0) {
    return function () {
      return this$0.j3t();
    };
  }
  function JsRuntime$_envsUC$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.collections.mapKeys' call
      var this_0 = _get__envs__kxwcr8(this$0);
      // Inline function 'kotlin.collections.mapKeysTo' call
      var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.l()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator = this_0.e2().s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'korlibs.io.runtime.JsRuntime._envsUC$delegate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.uppercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = element.l3().toUpperCase();
        // Inline function 'kotlin.collections.mapKeysTo.<anonymous>' call
        var tmp$ret$3 = element.p3();
        destination.x1(tmp, tmp$ret$3);
      }
      return toMap(destination);
    };
  }
  function JsRuntime() {
    Companion_getInstance_34();
    this.w3s_1 = 'unknown';
    this.x3s_1 = get_isDenoJs() ? 'deno.js' : get_isWeb() ? 'web.js' : get_isNodeJs() ? 'node.js' : get_isWorker() ? 'worker.js' : get_isShell() ? 'shell.js' : 'js';
    var tmp = this;
    tmp.y3s_1 = lazy(JsRuntime$_envs$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.z3s_1 = lazy(JsRuntime$_envsUC$delegate$lambda(this));
  }
  protoOf(JsRuntime).l3t = function () {
    return '.';
  };
  protoOf(JsRuntime).d3t = function (key) {
    var tmp = _get__envsUC__n5sgyq(this);
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = key.toUpperCase();
    return tmp.d2(tmp$ret$1);
  };
  protoOf(JsRuntime).a3t = function (path) {
    throw new NotImplementedError();
  };
  protoOf(JsRuntime).h3t = function () {
    throw new NotImplementedError();
  };
  function _envs$factory() {
    return getPropertyCallableRef('_envs', 1, KProperty1, function (receiver) {
      return _get__envs__kxwcr8(receiver);
    }, null);
  }
  function _envsUC$factory() {
    return getPropertyCallableRef('_envsUC', 1, KProperty1, function (receiver) {
      return _get__envsUC__n5sgyq(receiver);
    }, null);
  }
  function JsRuntimeBrowser$href$delegate$lambda() {
    var tmp0_safe_receiver = document.location;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.href;
    return tmp1_elvis_lhs == null ? '.' : tmp1_elvis_lhs;
  }
  function JsRuntimeBrowser$baseUrl$delegate$lambda() {
    return endsWith(JsRuntimeBrowser_getInstance().t3t(), '/') ? JsRuntimeBrowser_getInstance().t3t() : substringBeforeLast(JsRuntimeBrowser_getInstance().t3t(), _Char___init__impl__6a9atx(47));
  }
  function JsRuntimeBrowser() {
    JsRuntimeBrowser_instance = this;
    JsRuntime.call(this);
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    tmp.q3t_1 = navigator.platform;
    var tmp_0 = this;
    tmp_0.r3t_1 = lazy(JsRuntimeBrowser$href$delegate$lambda);
    var tmp_1 = this;
    tmp_1.s3t_1 = lazy(JsRuntimeBrowser$baseUrl$delegate$lambda);
  }
  protoOf(JsRuntimeBrowser).t3t = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.r3t_1;
    href$factory();
    return this_0.p3();
  };
  protoOf(JsRuntimeBrowser).u3t = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.s3t_1;
    baseUrl$factory();
    return this_0.p3();
  };
  protoOf(JsRuntimeBrowser).k3t = function (path) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(JsRuntimeBrowser).l3t = function () {
    return this.u3t();
  };
  protoOf(JsRuntimeBrowser).j3t = function () {
    // Inline function 'kotlin.collections.map' call
    var tmp = QueryString_instance;
    var tmp0_safe_receiver = document.location;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.search;
    var this_0 = tmp.w36(trimStart(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, charArrayOf([_Char___init__impl__6a9atx(63)])));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.l());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.e2().s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      // Inline function 'korlibs.io.runtime.browser.JsRuntimeBrowser.envs.<anonymous>' call
      var tmp_0 = item.l3();
      var tmp0_elvis_lhs = firstOrNull(item.p3());
      var tmp$ret$1 = to(tmp_0, tmp0_elvis_lhs == null ? item.l3() : tmp0_elvis_lhs);
      destination.p(tmp$ret$1);
    }
    return toMap_0(destination);
  };
  protoOf(JsRuntimeBrowser).a3t = function (path) {
    // Inline function 'kotlin.also' call
    var this_0 = withCatalogJail(UrlVfs_1(this.l3t()).e15(path)).f2t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.io.runtime.browser.JsRuntimeBrowser.openVfs.<anonymous>' call
    // Inline function 'korlibs.logger.Logger.info' call
    var this_1 = Companion_getInstance_34().i3t_1;
    var level = Level_INFO_getInstance();
    var tmp;
    if (this_1.w17(level)) {
      // Inline function 'korlibs.io.runtime.browser.JsRuntimeBrowser.openVfs.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'BROWSER openVfs: currentDir=' + JsRuntimeBrowser_getInstance().l3t() + ', path=' + path + ', urlVfs=' + this_0;
      this_1.x17(level, tmp$ret$0);
      tmp = Unit_instance;
    }
    return this_0;
  };
  protoOf(JsRuntimeBrowser).h3t = function () {
    return new HttpClientBrowserJs();
  };
  var JsRuntimeBrowser_instance;
  function JsRuntimeBrowser_getInstance() {
    if (JsRuntimeBrowser_instance == null)
      new JsRuntimeBrowser();
    return JsRuntimeBrowser_instance;
  }
  function Companion_28() {
    Companion_instance_34 = this;
    var tmp = this;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = Companion_instance_25.y35_1.toLowerCase();
    tmp.v3t_1 = setOf(['connection', tmp$ret$1]);
  }
  var Companion_instance_34;
  function Companion_getInstance_35() {
    if (Companion_instance_34 == null)
      new Companion_28();
    return Companion_instance_34;
  }
  function HttpClientBrowserJs$requestInternal$lambda($xhr, $deferred) {
    return function (e) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $xhr.response;
      // Inline function 'kotlin.js.asDynamic' call
      var out = new Int8Array(tmp$ret$1);
      return $deferred.no(new Response($xhr.status, $xhr.statusText, Headers_init_$Create$_1($xhr.getAllResponseHeaders()), openAsync(out), openAsync(out)));
    };
  }
  function HttpClientBrowserJs$requestInternal$lambda_0($deferred, $xhr, $url) {
    return function (e) {
      return $deferred.mo(RuntimeException_init_$Create$('Error status=' + $xhr.status + ",'" + $xhr.statusText + "' opening " + $url));
    };
  }
  function HttpClientBrowserJs$requestInternal$lambda_1($deferred, $xhr) {
    return function (it) {
      var tmp;
      if ($deferred.ap()) {
        $xhr.abort();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function $requestInternalCOROUTINE$283(_this__u8e3s4, method, url, headers, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e3u_1 = _this__u8e3s4;
    this.f3u_1 = method;
    this.g3u_1 = url;
    this.h3u_1 = headers;
    this.i3u_1 = content;
  }
  protoOf($requestInternalCOROUTINE$283).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 6;
            this.j3u_1 = CompletableDeferred(Job());
            this.k3u_1 = new XMLHttpRequest();
            this.k3u_1.open(this.f3u_1.fb(), this.g3u_1, true);
            null;
            var this_0 = 'arraybuffer';
            this.k3u_1.responseType = this_0;
            this.k3u_1.onload = HttpClientBrowserJs$requestInternal$lambda(this.k3u_1, this.j3u_1);
            this.k3u_1.onerror = HttpClientBrowserJs$requestInternal$lambda_0(this.j3u_1, this.k3u_1, this.g3u_1);
            var tmp0_iterator = this.h3u_1.s();
            while (tmp0_iterator.t()) {
              var header = tmp0_iterator.u();
              var this_1 = header.pe_1.toLowerCase();
              var hnname = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
              if (!Companion_getInstance_35().v3t_1.v(hnname)) {
                this.k3u_1.setRequestHeader(header.pe_1, header.qe_1);
              }
            }

            this.j3u_1.hk(HttpClientBrowserJs$requestInternal$lambda_1(this.j3u_1, this.k3u_1));
            if (!(this.i3u_1 == null)) {
              this.bc_1 = 1;
              suspendResult = readAll(this.i3u_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.k3u_1.send();
              this.bc_1 = 2;
              continue $sm;
            }

          case 1:
            this.l3u_1 = suspendResult;
            this.k3u_1.send(this.l3u_1);
            this.bc_1 = 2;
            continue $sm;
          case 2:
            this.m3u_1 = this.i3u_1;
            if (this.m3u_1 == null) {
              this.n3u_1 = null;
              this.bc_1 = 4;
              continue $sm;
            } else {
              this.bc_1 = 3;
              suspendResult = this.m3u_1.g2t(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 3:
            var tmp_0 = this;
            tmp_0.n3u_1 = Unit_instance;
            this.bc_1 = 4;
            continue $sm;
          case 4:
            this.bc_1 = 5;
            suspendResult = this.j3u_1.am(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            return suspendResult;
          case 6:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 6) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function HttpClientBrowserJs() {
    Companion_getInstance_35();
    HttpClient.call(this);
  }
  protoOf(HttpClientBrowserJs).c3b = function (method, url, headers, content, $completion) {
    var tmp = new $requestInternalCOROUTINE$283(this, method, url, headers, content, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  function href$factory() {
    return getPropertyCallableRef('href', 1, KProperty1, function (receiver) {
      return receiver.t3t();
    }, null);
  }
  function baseUrl$factory() {
    return getPropertyCallableRef('baseUrl', 1, KProperty1, function (receiver) {
      return receiver.u3t();
    }, null);
  }
  function JsRuntimeDeno() {
    JsRuntimeDeno_instance = this;
    JsRuntime.call(this);
  }
  protoOf(JsRuntimeDeno).k3t = function (path) {
    var tmp;
    try {
      Deno.statSync(path);
      tmp = true;
    } catch ($p) {
      var tmp_0;
      var e = $p;
      tmp_0 = false;
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JsRuntimeDeno).l3t = function () {
    try {
      var str = (new URL('.', Deno.mainModule)).pathname;
      var tmp;
      if (Companion_instance_2.f1x()) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = str.substring(1);
      } else {
        tmp = str;
      }
      return tmp;
    } catch ($p) {
      var e = $p;
      return '.';
    }
  };
  protoOf(JsRuntimeDeno).d3t = function (key) {
    return Deno.env.get(key);
  };
  protoOf(JsRuntimeDeno).j3t = function () {
    return jsObjectToMap(Deno.env.toObject());
  };
  protoOf(JsRuntimeDeno).a3t = function (path) {
    return (new DenoLocalVfs()).e15(path === '.' ? this.l3t() : path);
  };
  var JsRuntimeDeno_instance;
  function JsRuntimeDeno_getInstance() {
    if (JsRuntimeDeno_instance == null)
      new JsRuntimeDeno();
    return JsRuntimeDeno_instance;
  }
  function getFullPath($this, path) {
    return normalize(get_pathInfo(path));
  }
  function $openCOROUTINE$284(_this__u8e3s4, path, mode, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b3v_1 = _this__u8e3s4;
    this.c3v_1 = path;
    this.d3v_1 = mode;
  }
  protoOf($openCOROUTINE$284).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.e3v_1 = jsObject([to('read', this.d3v_1.q2u_1), to('write', this.d3v_1.n2u_1), to('append', this.d3v_1.r2u_1), to('truncate', this.d3v_1.p2u_1), to('create', this.d3v_1.n2u_1), to('createNew', this.d3v_1.o2u_1), to('mode', toInt('666', 8))]);
            this.bc_1 = 1;
            suspendResult = await_0(Deno.open(getFullPath(this.b3v_1, this.c3v_1), this.e3v_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var file = suspendResult;
            return toAsyncStream(new DenoAsyncStreamBase(file));
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $statCOROUTINE$289(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n3v_1 = _this__u8e3s4;
    this.o3v_1 = path;
  }
  protoOf($statCOROUTINE$289).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = await_0(Deno.stat(getFullPath(this.n3v_1, this.o3v_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            var it = suspendResult;
            var tmp_1 = it.isDirectory;
            var tmp_2 = numberToLong(it.size);
            var tmp_3 = numberToLong(it.dev);
            var tmp0_safe_receiver = it.ino;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : numberToLong(tmp0_safe_receiver);
            var tmp_4 = tmp1_elvis_lhs == null ? new Long(-1, -1) : tmp1_elvis_lhs;
            var tmp2_safe_receiver = it.mode;
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : numberToInt(tmp2_safe_receiver);
            tmp_0.p3v_1 = this.n3v_1.i2t(this.o3v_1, tmp_1, tmp_2, tmp_3, tmp_4, tmp3_elvis_lhs == null ? toInt('777', 8) : tmp3_elvis_lhs);
            this.cc_1 = 3;
            this.bc_1 = 4;
            continue $sm;
          case 2:
            this.cc_1 = 3;
            var tmp_5 = this.ec_1;
            if (tmp_5 instanceof Error) {
              var e = this.ec_1;
              var tmp_6 = this;
              tmp_6.p3v_1 = this.n3v_1.k2t(this.o3v_1);
              this.bc_1 = 4;
              continue $sm;
            } else {
              throw this.ec_1;
            }

          case 3:
            throw this.ec_1;
          case 4:
            this.cc_1 = 3;
            return this.p3v_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.cc_1 === 3) {
          throw e_0;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e_0;
        }
      }
     while (true);
  };
  function DenoLocalVfs() {
    Vfs.call(this);
  }
  protoOf(DenoLocalVfs).a2t = function (path, mode, $completion) {
    var tmp = new $openCOROUTINE$284(this, path, mode, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(DenoLocalVfs).c2t = function (path, $completion) {
    var tmp = new $statCOROUTINE$289(this, path, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  function $readCOROUTINE$291(_this__u8e3s4, position, buffer, offset, len, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y3v_1 = _this__u8e3s4;
    this.z3v_1 = position;
    this.a3w_1 = buffer;
    this.b3w_1 = offset;
    this.c3w_1 = len;
  }
  protoOf($readCOROUTINE$291).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            this.bc_1 = 1;
            suspendResult = await_0(this.y3v_1.d3w_1.seek(this.z3v_1.h6(), Deno.SeekMode.Start), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.bc_1 = 2;
            suspendResult = await_0(this.y3v_1.d3w_1.read(new Uint8Array(asUint8Array(this.a3w_1).buffer, this.b3w_1, this.c3w_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var read = suspendResult;
            var tmp1_elvis_lhs = read == null ? null : numberToInt(read);
            return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function $getLengthCOROUTINE$293(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m3w_1 = _this__u8e3s4;
  }
  protoOf($getLengthCOROUTINE$293).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 2;
            this.bc_1 = 1;
            suspendResult = await_0(this.m3w_1.d3w_1.stat(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = ARGUMENT.size;
            return numberToLong(ARGUMENT_0);
          case 2:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 2) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function DenoAsyncStreamBase(file) {
    AsyncStreamBase.call(this);
    this.d3w_1 = file;
  }
  protoOf(DenoAsyncStreamBase).e2x = function (position, buffer, offset, len, $completion) {
    var tmp = new $readCOROUTINE$291(this, position, buffer, offset, len, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(DenoAsyncStreamBase).q2w = function ($completion) {
    var tmp = new $getLengthCOROUTINE$293(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(DenoAsyncStreamBase).g2t = function ($completion) {
    this.d3w_1.close();
    return Unit_instance;
  };
  function get_nodeFS() {
    _init_properties_JsRuntimeNode_kt__v0s2kf();
    // Inline function 'kotlin.getValue' call
    var this_0 = nodeFS$delegate;
    nodeFS$factory();
    return this_0.p3();
  }
  var nodeFS$delegate;
  function _get_fs__ndc19a($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.s3w_1;
    fs$factory();
    return this_0.p3();
  }
  function _get_path__dbvv7q($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.t3w_1;
    path$factory();
    return this_0.p3();
  }
  function JsRuntimeNode$fs$delegate$lambda() {
    return require_node('fs');
  }
  function JsRuntimeNode$path$delegate$lambda() {
    return require_node('path');
  }
  function JsRuntimeNode() {
    JsRuntimeNode_instance = this;
    JsRuntime.call(this);
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    tmp.r3w_1 = process.platform;
    var tmp_0 = this;
    tmp_0.s3w_1 = lazy(JsRuntimeNode$fs$delegate$lambda);
    var tmp_1 = this;
    tmp_1.t3w_1 = lazy(JsRuntimeNode$path$delegate$lambda);
  }
  protoOf(JsRuntimeNode).k3t = function (path) {
    return _get_fs__ndc19a(this).existsSync(path);
  };
  protoOf(JsRuntimeNode).l3t = function () {
    return _get_path__dbvv7q(this).resolve('.');
  };
  protoOf(JsRuntimeNode).d3t = function (key) {
    return process.env[key];
  };
  protoOf(JsRuntimeNode).j3t = function () {
    return jsObjectToMap(process.env);
  };
  protoOf(JsRuntimeNode).a3t = function (path) {
    var tmp;
    if (path === '.') {
      var path_0 = get_jsRuntime().l3t();
      tmp = ((get_jsRuntime().k3t(path_0 + '/node_modules') ? get_jsRuntime().k3t(path_0 + '/kotlin') : false) ? get_jsRuntime().k3t(path_0 + '/package.json') : false) ? path_0 + '/kotlin' : path_0;
    } else {
      tmp = path;
    }
    var rpath = tmp;
    return (new NodeJsLocalVfs()).e15(rpath);
  };
  protoOf(JsRuntimeNode).h3t = function () {
    return new HttpClientNodeJs();
  };
  var JsRuntimeNode_instance;
  function JsRuntimeNode_getInstance() {
    if (JsRuntimeNode_instance == null)
      new JsRuntimeNode();
    return JsRuntimeNode_instance;
  }
  function asUint8Array(_this__u8e3s4) {
    _init_properties_JsRuntimeNode_kt__v0s2kf();
    var i = asInt8Array(_this__u8e3s4);
    return new Uint8Array(i.buffer, i.byteOffset, i.length);
  }
  function require_node(name) {
    _init_properties_JsRuntimeNode_kt__v0s2kf();
    return eval('(' + get_REQ() + "uire('" + name + "'))");
  }
  function getFullPath_0($this, path) {
    return normalize(get_pathInfo(path));
  }
  function NodeJsLocalVfs$stat$lambda($deferred, this$0, $path) {
    return function (err, stats) {
      // Inline function 'kotlin.runCatching' call
      var tmp;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'korlibs.io.runtime.node.NodeJsLocalVfs.stat.<anonymous>.<anonymous>' call
        var value = this$0.u3w(stats, $path);
        tmp = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var tmp$ret$3 = tmp;
      completeWith($deferred, tmp$ret$3);
      return Unit_instance;
    };
  }
  function NodeJsLocalVfs$_open$lambda($cc, $path, $cmode, $file) {
    return function (err, fd) {
      var tmp;
      if (!(err == null) ? true : fd == null) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_0 = $cc;
        // Inline function 'kotlin.Companion.failure' call
        var exception = new FileNotFoundException("Can't open '" + $path + "' with mode '" + $cmode + "': err=" + err);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        this_0.d6(tmp$ret$0);
        tmp = Unit_instance;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        var this_1 = $cc;
        // Inline function 'kotlin.Companion.success' call
        var value = toAsyncStream(new NodeFDStream($file, fd));
        var tmp$ret$2 = _Result___init__impl__xyqfz8(value);
        this_1.d6(tmp$ret$2);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NodeJsLocalVfs$_open$lambda_0(it) {
    return Unit_instance;
  }
  function $openCOROUTINE$297(_this__u8e3s4, path, mode, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d3x_1 = _this__u8e3s4;
    this.e3x_1 = path;
    this.f3x_1 = mode;
  }
  protoOf($openCOROUTINE$297).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 5;
            this.g3x_1 = this.f3x_1;
            this.h3x_1 = this.g3x_1.q9_1;
            if (this.h3x_1 === 0) {
              this.i3x_1 = 'r';
              this.bc_1 = 3;
              continue $sm;
            } else {
              if (this.h3x_1 === 1) {
                this.i3x_1 = 'r+';
                this.bc_1 = 3;
                continue $sm;
              } else {
                if (this.h3x_1 === 3) {
                  this.i3x_1 = 'w+';
                  this.bc_1 = 3;
                  continue $sm;
                } else {
                  if (this.h3x_1 === 5) {
                    this.bc_1 = 1;
                    suspendResult = this.d3x_1.c2t(this.e3x_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.h3x_1 === 4) {
                      this.i3x_1 = 'wx+';
                      this.bc_1 = 3;
                      continue $sm;
                    } else {
                      if (this.h3x_1 === 2) {
                        this.i3x_1 = 'a';
                        this.bc_1 = 3;
                        continue $sm;
                      } else {
                        var tmp_0 = this;
                        noWhenBranchMatchedException();
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.j3x_1 = suspendResult;
            if (this.j3x_1.j2s_1) {
              throw new FileAlreadyExistsException(this.e3x_1);
            } else {
              this.bc_1 = 2;
              continue $sm;
            }

          case 2:
            this.i3x_1 = 'w+';
            this.bc_1 = 3;
            continue $sm;
          case 3:
            this.k3x_1 = this.i3x_1;
            this.bc_1 = 4;
            suspendResult = this.d3x_1.l3x(this.e3x_1, this.k3x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return suspendResult;
          case 5:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 5) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function NodeJsLocalVfs() {
    LocalVfs.call(this);
  }
  protoOf(NodeJsLocalVfs).u3w = function (_this__u8e3s4, path) {
    var tmp;
    if (_this__u8e3s4 == null) {
      return this.k2t(path);
    } else {
      tmp = _this__u8e3s4;
    }
    var stats = tmp;
    return this.i2t(path, stats.isDirectory(), numberToLong(stats.size), numberToLong(stats.dev), numberToLong(stats.ino), numberToInt(stats.mode), VOID, VOID, Companion_getInstance_3().yh(stats.ctimeMs), Companion_getInstance_3().yh(stats.mtimeMs), Companion_getInstance_3().yh(stats.atimeMs));
  };
  protoOf(NodeJsLocalVfs).c2t = function (path, $completion) {
    var deferred = CompletableDeferred();
    var tmp = get_nodeFS();
    tmp.stat(path, NodeJsLocalVfs$stat$lambda(deferred, this, path));
    return deferred.am($completion);
  };
  protoOf(NodeJsLocalVfs).a2t = function (path, mode, $completion) {
    var tmp = new $openCOROUTINE$297(this, path, mode, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(NodeJsLocalVfs).l3x = function (path, cmode, $completion) {
    var file = this.h2j(path);
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.wn();
    // Inline function 'korlibs.io.runtime.node.NodeJsLocalVfs._open.<anonymous>' call
    var tmp = get_nodeFS();
    var tmp_0 = getFullPath_0(this, path);
    tmp.open(tmp_0, cmode, NodeJsLocalVfs$_open$lambda(cancellable, path, cmode, file));
    cancellable.mm(NodeJsLocalVfs$_open$lambda_0);
    return cancellable.il();
  };
  protoOf(NodeJsLocalVfs).toString = function () {
    return 'NodeJsLocalVfs';
  };
  function HttpClientNodeJs$requestInternal$lambda$lambda($body) {
    return function (d) {
      return $body.push(d);
    };
  }
  function HttpClientNodeJs$requestInternal$lambda$lambda_0($body, $statusCode, $statusMessage, $jsHeadersObj, $deferred) {
    return function () {
      // Inline function 'kotlin.js.asDynamic' call
      var r = get_jsGlobal().Buffer.concat($body);
      // Inline function 'kotlin.js.unsafeCast' call
      var u8array = new Int8Array(r);
      var out = new Int8Array(u8array.length);
      var inductionVariable = 0;
      var last = u8array.length;
      var tmp;
      if (inductionVariable < last) {
        do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          out[n] = u8array[n];
        }
         while (inductionVariable < last);
        tmp = Unit_instance;
      }
      // Inline function 'kotlin.collections.mapValues' call
      var tmp1_elvis_lhs = jsToObjectMap($jsHeadersObj);
      var this_0 = tmp1_elvis_lhs == null ? LinkedHashMap_init_$Create$() : tmp1_elvis_lhs;
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.l()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator = this_0.e2().s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp_0 = element.l3();
        // Inline function 'korlibs.io.runtime.node.HttpClientNodeJs.requestInternal.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$5 = toString_1(element.p3());
        destination.x1(tmp_0, tmp$ret$5);
      }
      var response = new Response($statusCode, $statusMessage, Headers_init_$Create$_0(destination), openAsync(out), openAsync(out));
      return $deferred.no(response);
    };
  }
  function HttpClientNodeJs$requestInternal$lambda($deferred) {
    return function (res) {
      var statusCode = res.statusCode;
      var tmp0_elvis_lhs = res.statusMessage;
      var statusMessage = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var jsHeadersObj = res.headers;
      var body = jsEmptyArray();
      res.on('data', HttpClientNodeJs$requestInternal$lambda$lambda(body));
      return res.on('end', HttpClientNodeJs$requestInternal$lambda$lambda_0(body, statusCode, statusMessage, jsHeadersObj, $deferred));
    };
  }
  function HttpClientNodeJs$requestInternal$lambda_0($deferred) {
    return function (e) {
      return $deferred.mo(RuntimeException_init_$Create$('Error: ' + e));
    };
  }
  function HttpClientNodeJs$requestInternal$lambda_1($deferred, $r) {
    return function (it) {
      var tmp;
      if ($deferred.ap()) {
        tmp = $r.abort();
      }
      return Unit_instance;
    };
  }
  function $requestInternalCOROUTINE$302(_this__u8e3s4, method, url, headers, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u3x_1 = _this__u8e3s4;
    this.v3x_1 = method;
    this.w3x_1 = url;
    this.x3x_1 = headers;
    this.y3x_1 = content;
  }
  protoOf($requestInternalCOROUTINE$302).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 6;
            this.z3x_1 = CompletableDeferred(Job());
            this.a3y_1 = require_node('http');
            this.b3y_1 = require_node('url');
            this.c3y_1 = this.b3y_1.parse(this.w3x_1);
            this.d3y_1 = jsEmptyObj();
            var tmp0_iterator = this.x3x_1.s();
            while (tmp0_iterator.t()) {
              var header = tmp0_iterator.u();
              this.d3y_1[header.pe_1] = header.qe_1;
            }

            this.e3y_1 = jsEmptyObj();
            this.e3y_1.method = this.v3x_1.fb();
            this.e3y_1.host = this.c3y_1['hostname'];
            this.e3y_1.port = this.c3y_1['port'];
            this.e3y_1.path = this.c3y_1['path'];
            this.e3y_1.agent = false;
            this.e3y_1.encoding = null;
            this.e3y_1.headers = this.d3y_1;
            var tmp_0 = this;
            tmp_0.f3y_1 = this.a3y_1.request(this.e3y_1, HttpClientNodeJs$requestInternal$lambda(this.z3x_1)).on('error', HttpClientNodeJs$requestInternal$lambda_0(this.z3x_1));
            this.z3x_1.hk(HttpClientNodeJs$requestInternal$lambda_1(this.z3x_1, this.f3y_1));
            if (!(this.y3x_1 == null)) {
              this.bc_1 = 1;
              suspendResult = readAll(this.y3x_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f3y_1.end();
              this.bc_1 = 2;
              continue $sm;
            }

          case 1:
            this.g3y_1 = suspendResult;
            this.h3y_1 = toTypedArray(this.g3y_1);
            this.f3y_1.end(this.h3y_1);
            this.bc_1 = 2;
            continue $sm;
          case 2:
            this.i3y_1 = this.y3x_1;
            if (this.i3y_1 == null) {
              this.j3y_1 = null;
              this.bc_1 = 4;
              continue $sm;
            } else {
              this.bc_1 = 3;
              suspendResult = this.i3y_1.g2t(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 3:
            var tmp_1 = this;
            tmp_1.j3y_1 = Unit_instance;
            this.bc_1 = 4;
            continue $sm;
          case 4:
            this.bc_1 = 5;
            suspendResult = this.z3x_1.am(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            return suspendResult;
          case 6:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 6) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function HttpClientNodeJs() {
    HttpClient.call(this);
  }
  protoOf(HttpClientNodeJs).c3b = function (method, url, headers, content, $completion) {
    var tmp = new $requestInternalCOROUTINE$302(this, method, url, headers, content, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  function asInt8Array(_this__u8e3s4) {
    _init_properties_JsRuntimeNode_kt__v0s2kf();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function get_REQ() {
    _init_properties_JsRuntimeNode_kt__v0s2kf();
    return 'req';
  }
  function checkFd($this) {
    if ($this.m3y_1 == null) {
      // Inline function 'kotlin.error' call
      var message = 'File ' + $this.l3y_1 + ' already closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function NodeFDStream$read$lambda($c, this$0) {
    return function (err, bytesRead, buf) {
      var tmp;
      if (!(err == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_0 = $c;
        // Inline function 'kotlin.Companion.failure' call
        var exception = new IOException('Error reading from ' + this$0.l3y_1 + ' :: err=' + err);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        this_0.d6(tmp$ret$0);
        tmp = Unit_instance;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        var this_1 = $c;
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$2 = _Result___init__impl__xyqfz8(bytesRead);
        this_1.d6(tmp$ret$2);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NodeFDStream$read$lambda_0(it) {
    return Unit_instance;
  }
  function NodeFDStream$getLength$lambda($c, this$0) {
    return function (err, stats) {
      var tmp;
      if (!(err == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_0 = $c;
        // Inline function 'kotlin.Companion.failure' call
        var exception = new IOException('Error getting length from ' + this$0.l3y_1 + ' :: err=' + err);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        this_0.d6(tmp$ret$0);
        tmp = Unit_instance;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        var this_1 = $c;
        // Inline function 'kotlin.Companion.success' call
        var value = numberToLong(stats.size);
        var tmp$ret$2 = _Result___init__impl__xyqfz8(value);
        this_1.d6(tmp$ret$2);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NodeFDStream$getLength$lambda_0(it) {
    return Unit_instance;
  }
  function NodeFDStream$close$lambda(this$0, $c) {
    return function (err) {
      this$0.m3y_1 = null;
      var tmp;
      if (!(err == null)) {
        // Inline function 'kotlin.coroutines.resume' call
        var this_0 = $c;
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.d6(tmp$ret$0);
        tmp = Unit_instance;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        var this_1 = $c;
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
        this_1.d6(tmp$ret$2);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NodeFDStream$close$lambda_0(it) {
    return Unit_instance;
  }
  function $closeCOROUTINE$305(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3y_1 = _this__u8e3s4;
  }
  protoOf($closeCOROUTINE$305).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 3;
            if (!(this.v3y_1.m3y_1 == null)) {
              this.bc_1 = 2;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.wn();
              var tmp_0 = get_nodeFS();
              var tmp_1 = this.v3y_1.m3y_1;
              tmp_0.close(tmp_1, NodeFDStream$close$lambda(this.v3y_1, cancellable));
              cancellable.mm(NodeFDStream$close$lambda_0);
              suspendResult = returnIfSuspended(cancellable.il(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bc_1 = 1;
              continue $sm;
            }

          case 1:
            return Unit_instance;
          case 2:
            return Unit_instance;
          case 3:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 3) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  function NodeFDStream(file, fd) {
    AsyncStreamBase.call(this);
    this.l3y_1 = file;
    this.m3y_1 = fd;
  }
  protoOf(NodeFDStream).e2x = function (position, buffer, offset, len, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.wn();
    // Inline function 'korlibs.io.runtime.node.NodeFDStream.read.<anonymous>' call
    checkFd(this);
    var tmp = get_nodeFS();
    var tmp_0 = this.m3y_1;
    var tmp_1 = toNodeJsBuffer(buffer);
    var tmp_2 = position.h6();
    tmp.read(tmp_0, tmp_1, offset, len, tmp_2, NodeFDStream$read$lambda(cancellable, this));
    cancellable.mm(NodeFDStream$read$lambda_0);
    return cancellable.il();
  };
  protoOf(NodeFDStream).q2w = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.wn();
    // Inline function 'korlibs.io.runtime.node.NodeFDStream.getLength.<anonymous>' call
    checkFd(this);
    var tmp = get_nodeFS();
    var tmp_0 = this.m3y_1;
    tmp.fstat(tmp_0, NodeFDStream$getLength$lambda(cancellable, this));
    cancellable.mm(NodeFDStream$getLength$lambda_0);
    return cancellable.il();
  };
  protoOf(NodeFDStream).g2t = function ($completion) {
    var tmp = new $closeCOROUTINE$305(this, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  function toNodeJsBuffer(_this__u8e3s4) {
    _init_properties_JsRuntimeNode_kt__v0s2kf();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return asUint8Array(_this__u8e3s4);
  }
  function nodeFS$delegate$lambda() {
    _init_properties_JsRuntimeNode_kt__v0s2kf();
    return require_node('fs');
  }
  function nodeFS$factory() {
    return getPropertyCallableRef('nodeFS', 0, KProperty0, function () {
      return get_nodeFS();
    }, null);
  }
  function fs$factory() {
    return getPropertyCallableRef('fs', 1, KProperty1, function (receiver) {
      return _get_fs__ndc19a(receiver);
    }, null);
  }
  function path$factory() {
    return getPropertyCallableRef('path', 1, KProperty1, function (receiver) {
      return _get_path__dbvv7q(receiver);
    }, null);
  }
  var properties_initialized_JsRuntimeNode_kt_f9ymrl;
  function _init_properties_JsRuntimeNode_kt__v0s2kf() {
    if (!properties_initialized_JsRuntimeNode_kt_f9ymrl) {
      properties_initialized_JsRuntimeNode_kt_f9ymrl = true;
      nodeFS$delegate = lazy(nodeFS$delegate$lambda);
    }
  }
  function toByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tout = _this__u8e3s4;
    var tmp;
    if (!(tout == null) ? isByteArray(tout) : false) {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = tout;
    } else {
      var out = new Int8Array(_this__u8e3s4.length);
      var inductionVariable = 0;
      var last = out.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          out[n] = _this__u8e3s4[n];
        }
         while (inductionVariable <= last);
      tmp = out;
    }
    return tmp;
  }
  function set_workerUrl(_set____db54di) {
    _init_properties_Worker_js_kt__6mcbpj();
    workerUrl = _set____db54di;
  }
  function get_workerUrl() {
    _init_properties_Worker_js_kt__6mcbpj();
    return workerUrl;
  }
  var workerUrl;
  function get_workerImpl() {
    _init_properties_Worker_js_kt__6mcbpj();
    return workerImpl;
  }
  var workerImpl;
  function get_isWorker_0() {
    _init_properties_Worker_js_kt__6mcbpj();
    // Inline function 'kotlin.js.unsafeCast' call
    return typeof DedicatedWorkerGlobalScope === 'function';
  }
  function workerImpl$o$insideWorker$lambda(evt) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var input = evt.data;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var id = input[0];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = input[1];
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? get_workerUrl() : tmp0_elvis_lhs;
    var moduleUrl = tmp1_elvis_lhs == null ? '.' : tmp1_elvis_lhs;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var clazzName = input[2];
    var params = drop(input, 3);
    var tmp = import(moduleUrl);
    var tmp_0 = tmp instanceof Promise ? tmp : THROW_CCE();
    var imported = tmp_0.then(workerImpl$o$insideWorker$lambda$lambda(clazzName, params, id));
    return Unit_instance;
  }
  function workerImpl$o$insideWorker$lambda$lambda$slambda($workerTask, $id, resultContinuation) {
    this.e3z_1 = $workerTask;
    this.f3z_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(workerImpl$o$insideWorker$lambda$lambda$slambda).s2p = function ($completion) {
    var tmp = this.j2m($completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(workerImpl$o$insideWorker$lambda$lambda$slambda).xc = function ($completion) {
    return this.s2p($completion);
  };
  protoOf(workerImpl$o$insideWorker$lambda$lambda$slambda).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 4;
            this.cc_1 = 3;
            this.e3z_1.v3n();
            this.g3z_1 = this.e3z_1.z3n_1;
            this.h3z_1 = this.g3z_1;
            var tmp_0 = this.h3z_1;
            if (!(tmp_0 == null) ? isInterface(tmp_0, Deferred) : false) {
              this.bc_1 = 1;
              suspendResult = this.g3z_1.am(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var this_0 = get_jsGlobalThis();
              var this_1 = [this.f3z_1, 'ok', this.g3z_1];
              this_0.postMessage(this_1);
              this.bc_1 = 2;
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = [this.f3z_1, 'ok', ARGUMENT];
            get_jsGlobalThis().postMessage(ARGUMENT_0);
            this.bc_1 = 2;
            continue $sm;
          case 2:
            this.cc_1 = 4;
            this.bc_1 = 5;
            continue $sm;
          case 3:
            this.cc_1 = 4;
            var e = this.ec_1;
            var this_2 = get_jsGlobalThis();
            var this_3 = [this.f3z_1, 'error', e.stack];
            this_2.postMessage(this_3);
            this.bc_1 = 5;
            continue $sm;
          case 4:
            throw this.ec_1;
          case 5:
            this.cc_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.cc_1 === 4) {
          throw e_0;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(workerImpl$o$insideWorker$lambda$lambda$slambda).j2m = function (completion) {
    return new workerImpl$o$insideWorker$lambda$lambda$slambda(this.e3z_1, this.f3z_1, completion);
  };
  function workerImpl$o$insideWorker$lambda$lambda$slambda_0($workerTask, $id, resultContinuation) {
    var i = new workerImpl$o$insideWorker$lambda$lambda$slambda($workerTask, $id, resultContinuation);
    var l = function ($completion) {
      return i.s2p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function workerImpl$o$insideWorker$lambda$lambda($clazzName, $params, $id) {
    return function (imported) {
      // Inline function 'kotlin.js.asDynamic' call
      var taskClass = imported[$clazzName];
      // Inline function 'kotlin.js.unsafeCast' call
      var workerTask = jsNew(taskClass);
      workerTask.y3n_1 = toList($params);
      var tmp = EmptyCoroutineContext_getInstance();
      return launchImmediately(tmp, workerImpl$o$insideWorker$lambda$lambda$slambda_0(workerTask, $id, null));
    };
  }
  function workerImpl$1() {
    _WorkerImpl.call(this);
    this.i3z_1 = 0;
  }
  protoOf(workerImpl$1).j3z = function () {
    return !(get_workerUrl() == null);
  };
  protoOf(workerImpl$1).x3o = function () {
    var tmp;
    if (get_isDenoJs()) {
      tmp = Deno.mainModule;
    } else {
      var tmp0_safe_receiver = lastOrNull(Companion_instance_4.y1x().a1y_1);
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1x_1;
    }
    set_workerUrl(tmp);
    if (get_workerUrl() == null) {
      println('workerUrl = null, STACKTRACE:' + stackTraceToString(Exception_init_$Create$_0()));
    }
    if (get_isWorker_0() ? this.j3z() : false) {
      // Inline function 'kotlin.js.asDynamic' call
      get_jsGlobalThis().onmessage = workerImpl$o$insideWorker$lambda;
    }
    return get_isWorker_0();
  };
  var properties_initialized_Worker_js_kt_gnq77b;
  function _init_properties_Worker_js_kt__6mcbpj() {
    if (!properties_initialized_Worker_js_kt_gnq77b) {
      properties_initialized_Worker_js_kt_gnq77b = true;
      var tmp0_elvis_lhs = globalThis.location;
      workerUrl = tmp0_elvis_lhs == null ? get_isDenoJs() ? Deno.mainModule : '.' : tmp0_elvis_lhs;
      workerImpl = new workerImpl$1();
    }
  }
  //region block: post-declaration
  protoOf(BitmapFontImpl).b1 = get_0;
  protoOf(PreferSyncIo).ic = get;
  protoOf(PreferSyncIo).rf = fold;
  protoOf(PreferSyncIo).qf = minusKey;
  protoOf(PreferSyncIo).sf = plus_0;
  protoOf(VfsCachedStatContext).ic = get;
  protoOf(VfsCachedStatContext).rf = fold;
  protoOf(VfsCachedStatContext).qf = minusKey;
  protoOf(VfsCachedStatContext).sf = plus_0;
  protoOf(AsyncStreamBase).f2x = hasLength;
  protoOf(AsyncStream).f2x = hasLength;
  protoOf(StandardPaths).b31 = appPreferencesFolder;
  //endregion
  //region block: init
  Companion_instance_5 = new Companion();
  DEFAULT_MAX_SAMPLES = 39690000;
  Bitmaps_instance = new Bitmaps();
  Companion_instance_12 = new Companion_6();
  Companion_instance_13 = new Companion_7();
  DefaultTtfFontOrNull = null;
  SystemFontRegistryOrNull = null;
  _nativeSystemFontProvider = null;
  Companion_instance_16 = new Companion_10();
  Companion_instance_17 = new Companion_11();
  Companion_instance_18 = new Companion_12();
  resourcesVfsDebug = false;
  Companion_instance_19 = new Companion_13();
  Companion_instance_20 = new Companion_14();
  customEnvironments = null;
  Companion_instance_21 = new Companion_15();
  QueryString_instance = new QueryString();
  Companion_instance_24 = new Companion_18();
  Companion_instance_25 = new Companion_19();
  Companion_instance_26 = new Companion_20();
  Companion_instance_28 = new Companion_22();
  EmptyLineOnce_instance = new EmptyLineOnce();
  Indent_instance = new Indent();
  Unindent_instance = new Unindent();
  MINUS_ZERO_D = -0.0;
  NumberParser_instance = new NumberParser();
  Companion_instance_30 = new Companion_24();
  Companion_instance_31 = new Companion_25();
  Json_instance = new Json();
  HtmlCanvas_instance = new HtmlCanvas();
  HtmlImage_instance = new HtmlImage();
  BrowserImage_instance = new BrowserImage();
  DynamicInternal_instance = new DynamicInternal();
  File_separatorChar = _Char___init__impl__6a9atx(47);
  StandardPaths_instance = new StandardPaths();
  EnvironmentInternal_instance = new EnvironmentInternal();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $korlibs = _.korlibs || (_.korlibs = {});
    var $korlibs$io = $korlibs.io || ($korlibs.io = {});
    var $korlibs$io$worker = $korlibs$io.worker || ($korlibs$io.worker = {});
    $korlibs$io$worker.DemoWorkerTask = DemoWorkerTask;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = readBitmapSlice;
  _.$_$.b = readBitmap;
  _.$_$.c = readBitmap_0;
  _.$_$.d = delay_0;
  _.$_$.e = launchUnscopedAndWait;
  _.$_$.f = withTimeoutNullable;
  _.$_$.g = _RGBA___get_af__impl__vu36qv;
  _.$_$.h = _RGBA___get_bf__impl__1xz5yg;
  _.$_$.i = _RGBA___get_gf__impl__5gcu1f;
  _.$_$.j = RGBA__hashCode_impl_h59qf6;
  _.$_$.k = _RGBA___get_hexString__impl__kocngm;
  _.$_$.l = _RGBA___get_rf__impl__kvz75k;
  _.$_$.m = _RGBA___get_rgb__impl__tijaqt;
  _.$_$.n = _RGBA___get_value__impl__hhco8v;
  _.$_$.o = RGBA__withAd_impl_cralao;
  _.$_$.p = Dyn__set_impl_2ozvx8;
  _.$_$.q = Bitmaps_instance;
  _.$_$.r = Colors_getInstance;
  _.$_$.s = Companion_getInstance_12;
  _.$_$.t = Companion_instance_13;
  _.$_$.u = Companion_instance_12;
  _.$_$.v = Companion_getInstance_16;
  _.$_$.w = Companion_instance_16;
  _.$_$.x = StandardPaths_instance;
  _.$_$.y = Companion_instance_21;
  _.$_$.z = Companion_getInstance_30;
  _.$_$.a1 = Companion_instance_31;
  _.$_$.b1 = get_nativeSoundProvider;
  _.$_$.c1 = Bitmap8;
  _.$_$.d1 = get_Bitmaps_transparent;
  _.$_$.e1 = get_Bitmaps_white;
  _.$_$.f1 = FloatBitmap32;
  _.$_$.g1 = ForcedTexId;
  _.$_$.h1 = MultiBitmap;
  _.$_$.i1 = NativeImage;
  _.$_$.j1 = NullBitmap;
  _.$_$.k1 = get_baseMipmapLevel;
  _.$_$.l1 = get_maxMipmapLevel;
  _.$_$.m1 = slice;
  _.$_$.n1 = ColorTransformMul;
  _.$_$.o1 = RGBA;
  _.$_$.p1 = Glyph;
  _.$_$.q1 = BitmapFontImpl;
  _.$_$.r1 = HtmlNativeImage;
  _.$_$.s1 = ImageDecodingProps;
  _.$_$.t1 = get_RegisteredImageFormats;
  _.$_$.u1 = toHtmlNative;
  _.$_$.v1 = get_isLow;
  _.$_$.w1 = AsyncSignal;
  _.$_$.x1 = Signal;
  _.$_$.y1 = invoke;
  _.$_$.z1 = launchImmediately;
  _.$_$.a2 = launchImmediately_0;
  _.$_$.b2 = launchUnscoped_0;
  _.$_$.c2 = launchUnscoped;
  _.$_$.d2 = incrementAndGet;
  _.$_$.e2 = korAtomic_1;
  _.$_$.f2 = korAtomic;
  _.$_$.g2 = MountableVfs;
  _.$_$.h2 = get_localCurrentDirVfs;
  _.$_$.i2 = get_resourcesVfs;
  _.$_$.j2 = toVfs;
  _.$_$.k2 = CancellableGroup;
  _.$_$.l2 = cancel;
  _.$_$.m2 = CloseableCancellable;
  _.$_$.n2 = cancel_0;
  _.$_$.o2 = get_invalidOp;
  _.$_$.p2 = invalidOp;
  _.$_$.q2 = get_portableSimpleName;
  _.$_$.r2 = toDisposable;
  _.$_$.s2 = get_unreachable;
  _.$_$.t2 = unsupported_0;
  _.$_$.u2 = Resourceable;
  _.$_$.v2 = Resources;
  _.$_$.w2 = openAsync;
  _.$_$.x2 = Indenter;
  _.$_$.y2 = Once;
  _.$_$.z2 = toStringDecimal;
  _.$_$.a3 = get_DEBUG_WORKER;
  _.$_$.b3 = get_workerImpl;
  //endregion
  return _;
}));